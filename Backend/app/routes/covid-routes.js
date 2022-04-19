module.exports = (app) =>{
    const analytics = require("../controllers/covid-analytics.js")


    app.get('/api/get/state/:state', analytics.singleStateAnalytics)
    
    app.get("/api/get/us", analytics.usAnalytics)
}