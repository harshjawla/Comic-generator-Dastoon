const express = require("express");
const bodyParser = require("body-parser");
const { default: axios } = require("axios");
// const bootstrap = require('bootstrap');

const app = express();
// app.use(bodyParser);

app.get("/auth", function(req, res) {

    const auth_credentials = {
        login_id: "test@sunbasedata.com",
        password: "Test@123"
    }
    
    axios.post("https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp",).then((resp) => {
        console.log(resp.data);
    }).catch((err) => {
        console.log(err)
    })
    res.sendFile(__dirname+"/calculator.html")
})

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req, res){
    console.log(req.params)
    let sum = parseInt(req.query.first) + parseInt(req.query.second);
    res.send(`<h1>The sum is: ${sum}</h1>`);
})

app.listen(3030, () => {
    console.log("Server started at port 3030")
})