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

client.set("string key", "string val", redis.print);

//client.message("this is message");