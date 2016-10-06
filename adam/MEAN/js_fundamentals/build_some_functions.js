function runningLogger(){
	console.log('I am running!');
}
runningLogger()
function multiplyByTen(num){
	return num*=10;
}

console.log(multiplyByTen(5));

function stringReturnOne(){
	return "I am awesome";
}

function stringReturnTwo(){
	return "Yeah you are";
}

console.log(stringReturnOne())

function caller(param){
	if(typeof param=='function'){
		param();
	}
}

function myDoubleConsoleLog(param, param2){
	if(typeof param=='function' && typeof param=='function'){
		console.log(param());
		console.log(param2());
	}
}

// myDoubleConsoleLog(stringReturnOne, stringReturnTwo)

function caller2(param){
	console.log('starting');
	setTimeout(function(){
		if(typeof param === 'function'){
				param(stringReturnOne, stringReturnTwo);
			}
		}, 2000);
	console.log('ending');
	return "interesting";
}

caller2(myDoubleConsoleLog)

