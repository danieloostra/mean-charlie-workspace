function runningLogger() {
console.log('I am running!')
}
// runningLogger();


// Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10
// before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.

function multiplyByTen(x){
	var result = x*5;
	console.log(result);
}
multiplyByTen(5);

// Basic: Write two functions (stringReturnOne and stringReturnTwo)
// that each return a different hard-coded string

// function stringReturnOne(str) {
// 	console.log("Sneha")
// }

// function stringReturnTwo(str) {
// 	console.log("Pokharel")
// }

// stringReturnOne();
// stringReturnTwo();

// Medium: Write a function named caller that has one parameter.
// If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.

// function myFunctionRunner(param){
//   if (typeof(param)=='function'){
//     param();
//   }
// }
// // Somewhat interesting right?
// myFunctionRunner(stringReturnOne);

// Medium: Write a function named myDoubleConsoleLog that has two parameters,
// if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.


// function myDoubleConsoleLog(param1,param2){
//   if (typeof(param1) == 'function' && typeof(param2) == 'function'){
//     console.log(param1(), param2());
//   }
// }
// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

// Hard: Write a function named caller2 that has one parameter. It console.log's the string 'starting', waits 2 seconds,
// and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.)
// The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

// need to go over this
// function caller2(param){
//   console.log('starting');
//   var x = setTimeout(function(){
//     if (typeof(param)=='function'){
//       // notice the passed parameters...
//       param(stringReturnOne, stringReturnTwo);
//     }
//   }, 2000);
//   console.log('ending');
//   return "interesting";
// }

// caller2(myDoubleConsoleLog);