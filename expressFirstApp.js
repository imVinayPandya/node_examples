/**
 * Created by vinay.pandya on 8/1/2015.
 */

var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send("Hello world......this is vinay");
});

app.listen(8081);