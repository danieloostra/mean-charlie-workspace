var my_module = require('./mathlib');
var math = new my_module();

console.log(math.add(2, 2));
console.log(math.multiply(2, 2));
console.log(math.square(3));
console.log(math.random(1, 45));