const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()


app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

require("./app/routes/covid-routes.js")(app)

app.listen(8080, () => {
    console.log("Server is listening on port 8080")
})


module.exports = app