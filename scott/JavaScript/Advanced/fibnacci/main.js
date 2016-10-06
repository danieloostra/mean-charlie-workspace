function fib() {
	var now = 0;
	var one = 0;
	var two = 0;
	var count = 0;
	function nacci() {
		if (count == 0){
			now = one + two;
		} else if (count == 1) {
			one++;
			now = one + two;
		} else if (count == 2) {
			now = one + two;
			two = now;
		} else {
			one = two;
			two = now;
			now = one + two;
		}
		console.log(now);
		count++;
	}
	return nacci
}
var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();