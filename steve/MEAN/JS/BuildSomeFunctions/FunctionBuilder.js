function runningLogger() {
	console.log("I am running!")
}

function byTen(num) {
	newNum = num * 10;
	console.log(newNum);
	return newNum;
}

function stringReturnOne() {
	return "Hello!";
}

function stringReturnTwo() {
	return "Tello";
}

function caller(func) {
	if (typeof(func) == '[object Function]') {
		function func() {
		}
	}
}

console.log(typeof caller);

function myDoubleConsoleLog(func1, func2) {
	if (typeof(func1) == '[object Function]' && typeof(func2) == '[object Function]') {
		console.log(func1());
		console.log(func2());
	}
}

function caller2(func) {
	console.log("Starting");
	setTimeout(function(){ alert("Hello"); }, 3000);
}



runningLogger();
byTen(10);
console.log(stringReturnTwo());



