var sumXY = function sums(x, y) {
	sum = 0;
	var arr = [];
	for (var i = 0; i <= Math.abs(x-y); i++) {
		arr[i] = x + i;
		sum += arr[i];
	}

	console.log(arr);
	console.log(sum);
}

var findMin = function min(arr) {
var min = arr[0];
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	console.log(min);
}

var findAVG = function average(arr) {
	var sum = 0;
		for(var i=0; i < arr.length; i++) {
			sum += arr[i];
		}
	var average = sum / arr.length;
	console.log(average);
}

var myCrazyObject = {
	sumXY : function sums(x, y) {
		sum = 0;
		var arr = [];
			for (var i = 0; i <= Math.abs(x-y); i++) {
				arr[i] = x + i;
				sum += arr[i];
			}
		console.log(arr);
		console.log(sum);
		},


	findMin : function min(arr) {
		var min = arr[0];
		for(var i = 0; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			}
		}
		console.log(min);
		},

	findAVG : function average(arr) {
		var sum = 0;
		for(var i=0; i < arr.length; i++) {
			sum += arr[i];
		}
		var average = sum / arr.length;
		console.log(average);
		}
}

myCrazyObject.sumXY(0,5);

var person = {
	name : "Charlie",
	distance_traveled: 0,
	say_name : function () {
		console.log(person.name);
	},
	say_something : function(phrase){
		console.log(`${person.name} says: $(phrase)`);
	},
	walk : function(){
		console.log(`${person.name} is walking!`);
		person.distance_traveled += 3;
	},
	running : function(){
		console.log('${person.name} is walking!');
		person.distance_traveled += 10;
	},
	crawling : function(){
	console.log('${person.name} is walking!');
	person.distance_traveled += 1;
	}
}

console.log(person);
person.say_name();
person.say_something('I love Java!');
console.log(person.distance_traveled);
person.running();
person.walk();
person.crawling();
console.log(person.distance_traveled);