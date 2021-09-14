var express = require('express');
var app = express();

const absolutePath = ".views/index.html"
app.get( "/", function (req, res) {
    res.sendFile(absolutePath);
})
console.log("Hello World");
































 module.exports = app;
