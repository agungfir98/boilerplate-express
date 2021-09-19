var express = require('express');
var app = express();
require("dotenv").config();

//  lesson: root-level request logger middleware
app.use(function (req, res, next) {
  console.log(req.method + " "+ req.path + " - " + req.ip);
  next();

})


app.use("/public", express.static(__dirname + "/public"))
app.get( "/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
})
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
});
// lesson: get route parameter input from the client
app.get("/:word/echo", function(req, res) {
  const { word } = req.params
  res.json({
    echo: word
  })
})
// lesson: Chain middleware to create time server
app.get("/now", function (req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.send({
    time: req.time
  });
}
)

// lesson: get query parameter input from the client
app.route("/name").get(function (req, res) {
  const {first, last} = req.query
  res.json({
    name: first + " " + last
  })
})
























 module.exports = app;
