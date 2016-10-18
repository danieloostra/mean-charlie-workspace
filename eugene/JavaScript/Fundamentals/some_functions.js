function runningLogger(){
	console.log('I am running!');
}
function multiplyByTen(input){
	return input*10;
}
console.log(multiplyByTen(5));
function stringReturnOne(){
	return 'string one';
}
function stringReturnTwo(){
	return 'string two';
}
function invoker(param){
	if (typeof param == 'function')
		param();
}
function myDoubleConsoleLog(param1, param2){
	if (typeof param1 == 'function')
		console.log(param1());
	if (typeof param2 == 'function')
		console.log(param2());
}
function caller2(param){
	console.log('starting');
	setTimeout(function(){
		if (typeof param == 'function')
		param(stringReturnOne,stringReturnTwo);
		console.log('ending?');
	}, 2000);	
	return 'interesting';
}
caller2(myDoubleConsoleLog);