function runningLogger() {
	console.log('I am running!');
}

function multiplyByTen(num) {
	return num * 10;
}

function stringReturnOne() {
	return 'First';
}

function stringReturnTwo() {
	return 'Second';
}

function caller(arg) {
	if (typeof(arg) === 'function') {
		arg();
	}
}

function myDoubleConsoleLog(arg1, arg2) {
	if (typeof(arg1) === 'function') {
		console.log(arg1(), arg2);
	}
}

function caller2(arg, args) {
	console.log('starting');
	setTimeout(function() {
		if (typeof(arg) === 'function') {
			console.log(arg(args));
		}
		console.log('ending');
	}, 2000)
	console.log('now')
	return 'interesting';
}

// console.log(multiplyByTen(5))
// caller(runningLogger)
myDoubleConsoleLog(stringReturnOne, caller2(multiplyByTen, 5))