/**
 * Created by vinay.pandya on 8/1/2015.
 */

var express = require('express');
var app = new express();

app.get('/', function(request, response) {
   console.log("GET request on home page");
    response.send("GET request on home page");
});

app.post('/', function(request, response) {
    console.log("POST request on home page");
    response.send("POST request on home page");
});

app.delete('/del_user', function(request, response) {
    console.log("Delete request on /del_user");
    response.send("Delete request on /del_user");
});

app.get('/list_user', function(request, response) {
    console.log("GET Request on /list_user");
    response.send("GET request on /list_user");
});

app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
});

app.listen(8081);