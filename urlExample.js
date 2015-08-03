/**
 * Created by vinay.pandya on 8/3/2015.
 */

var url = require('url');

//extract data from url
var data = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
console.log(data.hash);
console.log(data.href);
console.log(data.host);
console.log(data.port);
console.log(data.protocol);

//convert object in url
var dataOne = url.format({
    'protocol':'http:',
    'host': 'panduboys.com'
});
console.log(dataOne);