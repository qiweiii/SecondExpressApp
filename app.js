var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


// this tells express to look for public directory, so don't need to include public/app.css everytime you want to use it
app.use(express.static("public"));
app.set("view engine", "ejs"); // now u don't need to write .ejs in all files
var friends = ["tony", "qiwei", "Jason"];

// root directory, the function is a callback function, it takes in requests and respounds
app.get("/", function(req, res){
    res.render("home"); // embedded js: ejs
});

app.get("/wtf/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
  var posts = [
    {title: "Post 1", author: "Qiwei"},
    {title: "Post 2", author: "Qiwei2"},
    {title: "Post 3", author: "Qiwei3"},
  ]
  res.render("posts", {posts: posts});
});

app.post("/addfriend", function(req, res){
  var newfriend = req.body.newFriend;
  friends.push(newfriend);
  res.redirect("/friends");
})

app.get("/friends", function(req, res) {
  res.render("friends", {friends: friends});
});


// this line will be the bottom line of every application
// tell express to lsiten for requests(start server)
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
    console.log("Server started!");
});
