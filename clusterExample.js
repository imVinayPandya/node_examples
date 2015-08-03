/**
 * Created by vinay.pandya on 8/3/2015.
 */
//new cluster
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

//console.log(cluster);
if(cluster.isMaster){
    console.log("it is master");
    console.log("num cpus: "+numCPUs);

    for(var i=0; i < numCPUs; i++){
        cluster.fork();
    }

    cluster.on('fork', function(worker) {
        console.log(worker.id+" worker is forked");
    });
    cluster.on('listening', function(worker, address) {
        console.log("A worker is now connected to " + address.address + ":" + address.port);
    });
    cluster.on('exit', function(worker, code, signal) {
        console.log(worker.id+" worker exit");
    });
    cluster.on('online', function(worker) {
        console.log(worker.id+" is online");
    });
    cluster.on('disconnect', function(worker) {
        console.log('The worker #' + worker.id + ' has disconnected');
    });

}else{
    http.createServer(function(request, response){
        response.writeHead(200, {'content-type':'text/plain'});
        response.end("Hello world");
    }).listen(8080);
}
