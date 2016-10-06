"use strict";

function printArrVals(arr) {
	for (var i in arr) {
		console.log(arr[i]);
	}
}

function print500Sum() {
	var sum = 0;

	function* itergen() {
		var index = 2;
		while (true) {
			yield index++;
		}
	}

	var generator = new itergen();

	for (var i = 1; i <= 500; i = generator.next().value) {
		sum += i;
	}
	console.log(sum);
}

function findMin(arr) {
	var min = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	console.log(min);
}

function findAvg(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	var avg = sum/arr.length;
	console.log(avg)
}

function printObject(object) {
	for (var key in object) {
		console.log(key, object[key])
	}
}

var x = [3,5,'Dojo','rocks','Michael','Sensei'];

class new_ninja {
	constructor() {
		this.name = 'Jessica';
		this.profession = 'coder';
		this.favorite_language = 'JavaScript';
		this.dojo = 'Dallas';
	}
}

printArrVals(x);
x.push(100)
x = ['hello', 'world', 'JavaScript is Fun']
console.log(x)
print500Sum()
findMin([1, 5, 90, 25, -3, 0])
findAvg([1, 5, 90, 25, -3, 0])