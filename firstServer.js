/**
 * Created by vinay.pandya on 8/1/2015.
 */

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {
        "Content-type":"text/plain"
    });
    response.end("Hello world.....\n");
}).listen(8080, '127.0.0.1');

console.log("Server running at http://localhost:8080/");