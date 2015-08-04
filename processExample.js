/**
 * Created by vinay.pandya on 8/4/2015.
 */

//process example
process.on('beforeExit', function(code) {
    console.log('before exit with code: '+code);
});
process.on('exit', function(code) {
    setTimeout(function(){
        console.log("this is timeout function");
    }, 1000 );
    console.log('about to exit with code: '+code);
});