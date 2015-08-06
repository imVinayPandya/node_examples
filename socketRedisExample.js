/**
 * Created by vinay.pandya on 8/4/2015.
 */

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var redis = require('redis');
var client = redis.createClient();


var onlineUsers = [];
var usrData = {};

//serve html file
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/chatRedis.html");
});

//catch error with redis database
client.on('error', function(error) {
    console.log('error found while interacting with database: '+error);
});

//connecting socket
io.on('connection', function(socket) {
    var userName = '', userID = '';
    socket.on('user name', function(name) {
        userName = name;
        userID = socket.id;
        socket.broadcast.emit('chat message', name, "is connected");

        //adding user data into Redis database
        client.hset(['users', ''+socket.id, ''+name], function(error, reply) {
            if(error){
               console.log('can\'t  insert user into database');
            }else{
                client.hgetall(['users'], function(error, reply) {
                    //console.log('fetching user');
                    if(error) {
                        console.log('can\'t get users data.');
                    }
                    //console.log(reply);

                    if(reply != null) {
                        //console.log('got data');
                        usrData = {};
                        for(var key in reply) {
                            //console.log('key: '+ key + ' value: '+ reply[key]);
                            usrData.id = key;
                            usrData.name = reply[key];
                        }
                        //onlineUsers = reply;
                    }
                    onlineUsers.push(usrData);
                    //console.log(onlineUsers);
                    //console.log(onlineUsers.name);
                    //console.log(onlineUsers);
                    io.emit('update-users', onlineUsers);
                });

            }
            //console.log(reply);
        });

        //fetching all users from DB
    });

    socket.on('disconnect', function() {
        //var userNameIndex;
        io.emit('chat message', userName, "is disconnected");
            for(var i=0; i < onlineUsers.length; i++) {
                if( onlineUsers[i] != null && onlineUsers[i].name == userName && onlineUsers[i].id == userID) {
                    console.log('disconnecting');
                    client.hdel(['users', userID], function(error, reply){
                        if(error) {
                            console.log('can\'t delete user ' + error);
                        }else{
                            //fetching all users from DB
                            client.hgetall(['users'], function(error, reply) {

                                if(error) {
                                    console.log('can\'t get users data.');
                                }
                                //console.log(reply);

                                if(reply != null) {
                                    usrData = {};
                                    for(var key in reply) {
                                        //console.log('key: '+ key + ' value: '+ reply[key]);
                                        usrData.id = key;
                                        usrData.name = reply[key];
                                    }
                                    //onlineUsers = reply;
                                }
                                //console.log(onlineUsers.id);
                                //console.log(onlineUsers.name);
                            });
                            //console.log(onlineUsers);
                            onlineUsers = [];
                            onlineUsers.push(usrData);
                            //console.log(onlineUsers);
                            io.emit('update-users', onlineUsers);
                        }

                    });
                }
            }

    });


    socket.on('chat message', function(name, msg) {
        socket.broadcast.emit('chat message', name, msg);
    });

    socket.on('keypress', function( personID) {
        socket.broadcast.emit('keypress', personID);
    });

});


http.listen(8080, function() {
    console.log("http://localhost:8080");
});