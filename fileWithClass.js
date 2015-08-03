/**
 * Created by vinay.pandya on 8/1/2015.
 */

var fs = require('fs');

function FileObject() {
    this.filename = '';

    this.file_exist = function(callback) {
        var self = this;
        console.log("About open a file "+self.filename);
        fs.open(this.filename, 'r', function(error, result) {
            if(error){
                console.log("con't open file "+ self.filename);
                callback(error, null);
                return;
            }

            fs.close(result, function(){

            });

            callback(null, true);
        });
    };

}

var fo = new FileObject();
fo.filename = "info.txt";
fo.file_exist( function (err, results) {
    if (err) {
        console.log("Aw, bummer: " + JSON.stringify(err));
        return;
    }
    console.log("file exists!!!");
});
