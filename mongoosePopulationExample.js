/**
 * Created by vinay.pandya on 8/10/2015.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.on('open', function(callback) {
    console.log('connection has been done');

/*    //validator examples
    var toySchema = mongoose.Schema({
        color: String,
        name: String
    });

    var Toy = mongoose.model('Toy', toySchema);

    Toy.schema.path('color').validate(function(value) {
        return /blue|green|white|red|orange|periwinkle/i.test(value);

    }, 'invalid color');

    var toy = new Toy({
        color: 'sdfasdf'
    });

    toy.save(function(error) {

        console.log(error.message);
        console.log(error.errors.color.name);
        console.log(error.errors.color.kind);
        console.log(error.errors.color.path);
        console.log(error.errors.color.value);
    });*/

    //person schema
    var personSchema = mongoose.Schema({
        _id : Number,
        name: String,
        age : Number,
        stories : [{type: mongoose.Schema.Types.ObjectId, ref : 'Story'}]
    });

    //story schema
    var storySchema = mongoose.Schema({
        _creator : [{ type : Number, ref : 'Person' }],
        title : String,
        fans : [{ type : Number, ref : 'Person' }]
    });

    //compiling schema
    var Story = mongoose.model('Story', storySchema);
    var Person = mongoose.model('Person', personSchema);

   //new person and fan to database
    var aaron = new Person({_id:0, name:'Aaron', age:100});
    var fan = new Person({_id:1, name:'Chirag', age:21});
    //adding new story of aaron or adding reference
    var story = new Story({
        title:'once upon a timex',
        _creator : aaron._id,
        fans : [fan]
    });

    aaron.stories.push(story);
/*
    //adding fan
    fan.save( function(error) {
        if(error)
            console.error('can\'t add fan ');
    });

    //adding person
    aaron.save( function(error) {
        if(error)
            console.error('can\'t save person '+aaron.name);


        story.save(function(error) {
            if(error)
                console.error('can\'t insert story:'+story.title+' of person '+aaron.name);
        });
    });*/


    //population
    //find story's creator
    //this query find all the data of creator
    /*
    Story
        .findOne({ title:'once upon a timex' })
        .populate('_creator')
        .exec(function (error, story) {
            if(error)
                cnsole.error('can\'t find book');
            console.log('the creator of book %s is %s', story.title, story._creator[0].name);
        });
*/

    //fetch only specific field of person, here is name
    /*Story
        .findOne({ title: /time/i })
        .populate('_creator', 'name')
        .exec(function(error, story) {
            if(error)
                console.error('found error');
            console.log('the creator %s ', story._creator[0].name); //Aaron
            console.log('the creator age ', story._creator[0].age); //undefined
        });*/

    //fetch multiple fields of person
    /*Story
        .findOne({ title: /time/i })
        .populate('_creator fans')
        .exec(function(error, story) {
            if(error)
                console.error('found error: '+error);

            console.log('the creator %s and his/her fans are %d', story._creator[0].name, story._creator[0].fans);
        });*/

    //find book and its fans name
    /*Story
        .findOne({ title: /time/i })
        .populate({
            path: 'fans',
            match : { age: { $gte : 21  } },
            select : 'name -_id',
            options : { limit: 5 }
        })
        .exec(function(error, story) {
            if(error)
                console.error('can\'t find story');
            console.log(story);
        });*/

    //find book and its creator name
    /*Story
        .findOne({ title: /time/i })
        .populate({
            path: '_creator',
            select : 'name'
        })
        .exec(function(error, person) {
            if(error)
                console.error('can\'t find person');
            console.log(person);
        });*/

    //count numbers of records in database
    var count = Story.where({title:/time/i}).count(function(error, count) {
        if(error) {
            console.log('can\'t count story');
        }
        console.log('found %d stories', count);
    });
});