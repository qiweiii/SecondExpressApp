var express = require("express");
var app = express();


// root directory, the function is a callback function, it takes in requests and respounds
app.get("/", function(req, res){
    res.render("home.ejs"); // embedded js
});

app.get("/wtf/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res) {
  var posts = [
    {title: "Post 1", author: "Qiwei"},
    {title: "Post 2", author: "Qiwei2"},
    {title: "Post 3", author: "Qiwei3"},
  ]
  res.render("posts.ejs", {posts: posts});
});

// this line will be the bottom line of every application
// tell express to lsiten for requests(start server)
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
    console.log("Server started!");
});
