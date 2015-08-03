/**
 * Created by vinay.pandya on 8/3/2015.
 */
var querystring = require('querystring');

//json data to query string
console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }));

//query string to json data
console.log(querystring.parse('foo=bar&baz=qux&baz=quux&corge'));