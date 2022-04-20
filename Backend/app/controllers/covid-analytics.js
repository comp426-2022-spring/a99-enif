const axios = require("axios")
const BASE_API_URL = "https://api.covidtracking.com"
// exports.something = (req,res) => {
//     console.log("somethingd")
// }


exports.singleStateAnalytics = (req, res) => {
    if (!req.params.state){
        return res.status(404).send("State must be provided")
    } else if (req.params.state.length != 2){
        return res.status(404).send("State must be two letters")
    }

    axios({
        method: "GET",
        url: BASE_API_URL + "/v1/states/" + req.params.state + "/current.json"

    }).then((response) => {
        return res.status(200).json(response.data)
    }).catch((err) => {
        return res.status(501).send("An error occurred while fetching data")
    })

}


exports.usAnalytics = (req, res) => {
    axios({
        method: "GET",
        url: BASE_API_URL + "/v1/us/current.json"

    }).then((response) => {
        return res.status(200).json(response.data)
    }).catch((err) => {
        return res.status(501).send("An error occurred while fetching data")
    })

}


