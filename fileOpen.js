/**
 * Created by vinay.pandya on 8/1/2015.
 */

var fs = require('fs');

fs.open('info.txt', 'r', function(error, result) {
    if(error) {
        console.log("Error: error code "+error.code+" error message "+error.message);
    }else{
        console.log("all is well "+result);
    }

} );
