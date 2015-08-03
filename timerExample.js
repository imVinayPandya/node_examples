/**
 * Created by vinay.pandya on 8/3/2015.
 */

// it will print message after three seconds
setTimeout(function() {
    console.log("this is timeout function");
}, 3000);

// it will print message after every one second
setInterval(function() {
    console.log("this is interval function");
}, 1000);