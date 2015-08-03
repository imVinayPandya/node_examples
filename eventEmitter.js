/**
 * Created by vinay.pandya on 8/3/2015.
 */


//new event emitter
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var fs = require('fs');

emitter.once('connection', function () {
    console.log(' we have our first user!');
});

emitter.emit('connection');

emitter.on("start_read", function(file_name) {
   console.log("file reading....\n");
    fs.readFile(file_name, 'utf8', function(error, result) {
        if(error) {
            emitter.emit("error", "from_read");
        }else{
            console.log("i have read file. \n ");
            emitter.emit("print_data", result);
        }
    });
});

emitter.on("print_data", function(data) {
    console.log("printing data..\n");
    console.log(data);
    emitter.emit("done");
});

emitter.on("error", function(type) {
    console.log("error caught from"+type);
});

emitter.on("done", function() {
    console.log("everything has been done");
});

emitter.emit("start_read", 'info.txt');