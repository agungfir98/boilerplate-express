var express = require('express');
var app = express();



app.use("/public", express.static(__dirname + "/public"))
app.get( "/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
})
console.log("Hello World");

app.get("/json", function (req, res) {
    if (process.env.MESSAGE_STYLE == "uppercase") {
        res.json({
            "message": "Hello json"
        })
    }else {
        res.json({
            "message": "Hello json".toUpperCase()
        })
    }
})






























 module.exports = app;
