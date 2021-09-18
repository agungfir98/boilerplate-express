var express = require('express');
var app = express();
require("dotenv").config();


app.use("/public", express.static(__dirname + "/public"))
app.use( function middleware(req, res, next) {
    console.log();
    app.get( "/", function (req, res) {
        res.sendFile(__dirname + "/views/index.html");
    })
    console.log("Hello World");
    
    app.get("/json", function (req, res) {
        if (process.env.MESSAGE_STYLE === "uppercase") {
            res.json({
                "message": "Hello json".toUpperCase()
            })
        }else {
            res.json({
                "message": "Hello json"
            })
        }
    })
    next();
})






























 module.exports = app;
