function printit(param) {
	console.log(global[param]);
}

global.fish = "swordfish";
global.pet = "cat";

printit("fish");
printit("pet");
printit("fruit");