/**
 * Created by vinay.pandya on 8/4/2015.
 */

var http = require('http');
var querystring = require('querystring');

http.createServer(function(request, response) {
    response.writeHead({
        'content-type':'text/plain'
    });
    response.end("hello dunia");
}).listen(8080);

//http.get tutorial
http.get("http://www.google.com/index.html", function(res) {
    console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});

//http.METHODs tutorial
//console.log(http.METHODS);

//http.request example
var postData = querystring.stringify({
    'msg':'hello world'
});

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST',
    headers: {
        'content-type':'application/x-www-form-urlencoded',
        'content-length': postData.length
    }
};

var req = http.request(options, function(response) {
    console.log("status: "+response.statusCode);
    console.log("headers; "+JSON.stringify(response.headers));
    response.setEncoding('UTF8');
    response.on('data', function(chunk){
        console.log("body: "+chunk);
    });
});

req.on('error', function(error){
    console.log("something wrong with request "+error.message);
});

req.write(postData);
req.end();