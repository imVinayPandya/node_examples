/**
 * Created by vinay.pandya on 8/1/2015.
 */

var fs = require('fs');

var handle = fs.openSync('info.txt', 'r');
var buff = new Buffer(100000);
var read = fs.readSync(handle, buff, 0, 100000, null);

console.log(buff.toString('utf8',0, read));
fs.closeSync(handle);