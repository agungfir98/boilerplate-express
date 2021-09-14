const { response } = require('express');
var express = require('express');
var app = express();



app.use("/public", express.static(__dirname + "/public"))
app.get( "/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
})
console.log("Hello World");

app.get("/json", function (req, res) {
    if (process.env.MESSAGE_STYLE = uppercase) {
        response = "Hello json".toUpperCase();
    }else {
        response = "Hello json"
    }
})






























 module.exports = app;
