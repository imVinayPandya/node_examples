/**
 * Created by vinay.pandya on 8/1/2015.
 */

try {
    setTimeout(function() {
        throw new Error("i am an error, thrown by user");
        console.log("doing something...");
    },2000);
}catch(e) {
    console.log("i got an error: "+e.message);
}
