/*
*
*	custom sorting function
*
*/
var names = ['a', 'z', 'c', 'x', 'd'];
console.log(names);

names.sort(function (a, b) {var a1 = a.toLowerCase(), b1 = b.toLowerCase();	if (a1 < b1) return -1;	if (a1 > b1) return 1;	return 0;});

console.log(names);