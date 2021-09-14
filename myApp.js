var express = require('express');
var app = express();
require("dotenv").config();


app.use("/public", express.static(__dirname + "/public"))
app.get( "/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
})
console.log("Hello World");

app.get("/json", function (req, res) {
    if (process.env.MESSAGE_STYLE !== "uppercase") {
        res.json({
            "message": "true"
        })
    }else {
        res.json({
            "message": "false"
        })
    }
})






























 module.exports = app;
