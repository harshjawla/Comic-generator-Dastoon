const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.listen(3030, () => {
    console.log("Server started at port 3030")
})