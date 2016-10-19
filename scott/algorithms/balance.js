function balancePoint(arr) {
	if (arr.length <= 1) {
		return false;
	} else {
		var sum1 = 0;
		for (var i = 0; i < arr.length; i++) {
			var sum2 = 0;
			sum1 += arr[i];
			for (var k = i + 1; k < arr.length; k++) {
				sum2 += arr[k];
				if (sum2 == sum1 && k == arr.length - 1) {
					return [true, i];
				}
			}
		}
		return false;
	}
}

console.log(balancePoint([1,2,3,6]));
console.log(balancePoint([2,3,7,1]));
console.log(balancePoint([10,0,0,10]));
console.log(balancePoint([1,1]));