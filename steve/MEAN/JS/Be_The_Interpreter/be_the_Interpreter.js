//declarations get hoisted
var hello;                 
function example() {       
  var hello;               
  hello = "hi";            
  console.log(hello);       
}
//assignments and invocation maintain order
hello = "interesting";     
example();                        
console.log(hello);

var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
console.log(first_variable);


function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
var food = "Chicken";
console.log(food);

function lastFunc() {
  new_word = "old";
}
var new_word = "NEW!";

console.log(new_word);
