/**
 * Created by vinay.pandya on 8/6/2015.
 */

var redis = require('redis'),
    publisher = redis.createClient(),
    subscriber = redis.createClient();

var app = require('http').createServer(function(request, response) {
        response.writeHead(200);
        response.end();
    }),
    io = require('socket.io').listen(app);


app.listen(80); //, "192.168.178.34");


io.sockets.on('connect', function(socket) {
    console.log('connected');
    socket.on('chat', function(msg) {
        console.log('message: '+msg );
        publisher.publish('test', 'hello');
    });
});

subscriber.on('message', function(channel, message) {
    console.log('message: '+message+' in channel; '+channel);
});

subscriber.on('subscribe', function(channel, count) {
    console.log('new subscriber on: '+channel+' and count: '+count);
    io.emit('chat', 'this is message from emit');
});

subscriber.on('ready', function() {
    subscriber.subscribe('test');
});


