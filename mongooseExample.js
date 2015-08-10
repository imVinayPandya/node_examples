/**
 * Created by vinay.pandya on 8/10/2015.
 */

//including mongoose database dependency
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

//check database connected or not
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

db.on('open', function(callback) {
    console.log('connection has been done');

    //generating schema which has string name
    var kittenSchema = mongoose.Schema({
        name: String
    });

    //adding speak method in schema
    kittenSchema.methods.speak = function() {
        var greeting = this.name ?
        'kitten name is: '+this.name :
            'i don\'t know this kitten ';
        console.log(greeting);
    };

    //compiling schema or creating model/class from schema
    var Kitten = mongoose.model('kitten', kittenSchema);

    // creating new object of model/class
    //var silence = new Kitten({
    //    name: 'silence'
    //});

    //saving kitten data in database
    //silence.save(function(error, silence) {
    //   if(error)
    //    return console.error(error);
    //
    //
    //    console.log(silence.name);
    //    silence.speak();
    //});

    // creating another object of model/class
    //var fluffy = new Kitten({
    //    name: 'fluffy'
    //});

    //saving kitten data in database
    /*fluffy.save(function(error, fluffy) {
        if(error)
            return console.error(error);


        console.log(fluffy.name);
        fluffy.speak();
    });*/



    //now find kittens
    //Kitten.find(function(error, kittens) {
    //    if(error)
    //        console.error(error);
    //
    //    console.log(kittens);
    //});

    //now find kitten by name
    /*Kitten.find({name: 'fluffy'},function(error, kittens) {
        if(error)
            console.error(error);

        console.log(kittens);
    });*/

    //now find kitten by name
    /*Kitten.findOneAndRemove({name: 'fluffy'},function(error, kittens) {
        if(error)
            console.error(error);

        console.log(kittens);
    });*/

    //find and delete all
    //Kitten.remove({name: 'silence'},function(error, kittens) {
    //    if(error)
    //        console.error(error);
    //
    //    console.log(kittens);
    //});

    //find one and update
    //Kitten.findOneAndUpdate({name: 'chirag'}, {$set: {name: 'fluffy'}}, function(error, kittens) {
    //    if(error)
    //        console.error(error);
    //
    //    console.log(kittens);
    //});
});

