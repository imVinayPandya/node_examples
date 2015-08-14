/**
 * Created by vinay.pandya on 8/14/2015.
 */

function Animal(name) {
    this.name = name;
}

Animal.prototype = {
    canWalk: true,
    sit: function() {
        this.canWalk = false;
        console.log(this.name+' sit down');
    }
};


var animal = new Animal('Pet');
console.log(animal.canWalk);
animal.sit();
console.log(animal.canWalk);

var animal2 = new Animal('Pet2');
console.log(animal2.canWalk);
animal2.sit();
console.log(animal2.canWalk);

