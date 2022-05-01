const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use(express.static('./public'));

const reg_db = require('../Backend/database/reg_database.js')
const log_db = require('../Backend/database/log_database.js')

app.get('/api/log/access', (req, res) => {
    const stmt = log_db.prepare('SELECT * FROM accesslog').all()
    res.status(200).json(stmt)
})

const fs = require('fs')
const morgan = require('morgan')

const writeStream = fs.createWriteStream('./data/log/access.log', {flags: 'a'})
app.use(morgan('combined', {stream: writeStream}))

app.use((req, res, next) => {
    let logdata = {
        remoteaddr: req.ip,
        remoteuser: req.user,
        time: Date.now(),
        method: req.method,
        url: req.url,
        protocol: req.protocol,
        httpversion: req.httpVersion,
        status: res.statusCode,
        referer: req.headers['referer'],
        useragent: req.headers['user-agent']
    }

    const stmt = log_db.prepare(`INSERT INTO accesslog (remoteaddr, remoteuser, time, method, url, protocol, httpversion, status, referer, useragent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
    const info = stmt.run(logdata.remoteaddr, logdata.remoteuser, logdata.time, logdata.method, logdata.url, logdata.protocol, logdata.httpversion, logdata.status, logdata.referer, logdata.useragent)
    next()
})

require("./app/routes/covid-routes.js")(app)

app.listen(8080, () => {
    console.log("Server is listening on port 8080")
})


module.exports = app