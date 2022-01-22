var express = require('express');
var app = express();
require('dotenv').config()
console.log(process.env.MESSAGE_STYLE);
console.log("Hello World");
app.get("/", function(req, res){
    res.sendFile( __dirname + "/views/index.html");
});
app.use(express.static(__dirname + "/public"))
app.use("/public", express.static(__dirname + "/public"))
app.get("/json", function(req, res){
    let response  = {"message": "Hello json"};
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message": "HELLO JSON"}) }
        else {
            res.json(response);
        }
        
         })
        
































 module.exports = app;
