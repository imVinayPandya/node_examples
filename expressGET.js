/**
 * Created by vinay.pandya on 8/1/2015.
 */

var express = require('express');
var app = new express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/get.html', function(request, response) {
    console.log("getting GET request from home page");
    response.sendFile( __dirname + "/" + "get.html" );
});

app.post('/process_post', urlencodedParser, function(req, res) {
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.get('/process_get', function(req, res) {
   response = {
       first_name: req.query.first_name,
       last_name: req.query.last_name
   };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.listen(8080);