/**
 * Created by vinay.pandya on 8/1/2015.
 */

var fs = require('fs');

fs.open('info.txt', 'r', function(error, result) {
    if(error) {
        console.log("Error with file: Error code "+error.code+", error message "+error.message);
    }else{
        var buf = new Buffer(100000);
        fs.read(
            result, buf, 0, 100000, null,
            function (err, length) {
                if (err) {
                    console.log("ERROR: " + err.code +
                        " (" + err.message + ")");
                    return;
                }
                console.log(buf.toString('utf8', 0, length));

                fs.close(result, function () {
                /* don't care */
                });
            }
        );

    }
});
