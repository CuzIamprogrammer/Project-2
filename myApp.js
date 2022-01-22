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
    var response  = {"message": "Hello Json"};
    if (process.env.MESSAGE_STYLE === "uppercase"){
        response.message = "HELLO JSON"; }
        else {
            response.message = "Hello Json";
        }
        
        res.json(response)  })
        
































 module.exports = app;
