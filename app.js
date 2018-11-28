var express = require("express");
var app = express();


// root directory, the function is a callback function, it takes in requests and respounds
app.get("/", function(req, res){
    res.render("home.ejs"); // embedded js
});

app.get("/wtf/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thing: thing});
});

// this line will be the bottom line of every application
// tell express to lsiten for requests(start server)
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
    console.log("Server started!");
});
