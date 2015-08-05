/**
 * Created by vinay.pandya on 8/4/2015.
 */

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var onlineUsers = [];
app.get('/', function(req, res) {
    //res.send("<h1>Hello dunia</h1>");
    res.sendFile(__dirname + "/chat.html");
});

io.on('connection', function(socket) {
    var userName;
    socket.on('user name', function(name) {
        userName = name;
        socket.broadcast.emit('chat message', name, "is connected");
        onlineUsers.push({
            name: name,
            id: socket.id
        });
        io.emit('update-users', onlineUsers);
    });

    socket.on('disconnect', function() {
        var userNameIndex;
        io.emit('chat message', userName, "is disconnected");
            for(var i=0; i < onlineUsers.length; i++){
                if( onlineUsers[i] != null && onlineUsers[i].name == userName) {
                    userNameIndex = i;
                }
            }

            delete onlineUsers[userNameIndex];
            //onlineUsers = onlineUsers.slice(userNameIndex);
            io.emit('update-users', onlineUsers);
    });

/*    socket.on('online', function(name) {
        socket.broadcast.emit('online', name);
    });*/

    socket.on('chat message', function(name, msg) {
        socket.broadcast.emit('chat message', name, msg);
    });

    socket.on('keypress', function( personID) {
        socket.broadcast.emit('keypress', personID);
    });

});

/*io.set('authorization', function (handshakeData) {
    var token = handshakeData._query.t;
    //will call callback(null, true) if authorized
   // checkAuthToken(token, callback);
    console.log(token);
});*/


http.listen(8080, function() {
    console.log("http://localhost:8080");
});