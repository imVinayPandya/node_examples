/**
 * Created by vinay.pandya on 8/5/2015.
 */

var redis = require('redis');
var client = redis.createClient();

/*client.on('ready', function() {
 console.log('ready........');
 });
 client.on('connect', function() {
 console.log('connected');
 });*/

client.on('error', function(error) {
    console.log(error);
});

/*client.on('subscribe', function(channel, count ) {
    console.log('subscribed');
});

client.on('message', function(channel, message) {
    console.log('message');
});*/

//client.subscribe("hello nice one");

client.hset(['vinayPandya', "string key", "string val"], function(error, reply) {
    if(error) {
        console.log("Error: "+error);
    }

    console.log("Replay: "+reply);
    client.end();
});

client.hget(['vinayPandya', 'string key'], function(error, reply) {
    if(error) {
        console.log('error: '+error);
    }

    console.log('replay: '+reply)
});

client.hgetall(['vinayPandya'], function(error, reply) {
    if(error) {
        console.log('error; '+error);
    }
    console.log(reply);
});

//client.message("this is message");