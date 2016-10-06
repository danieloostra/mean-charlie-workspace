sumintsbetween = function(x, y) {
	var sum = 0;
	for (var i = Math.floor(x) + 1; i < Math.floor(y); i++) {
		sum += i;
	}
	console.log(sum);
}

findMin = function(arr) {
	min = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	console.log(min);
}

findAvg = function(arr) {
	sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	avg = sum/arr.length;
	console.log(avg)
}

sumintsbetween(5,10);
findMin([1,2,3,4,5]);
findAvg([1,2,3,4,5]);

var test = {
	sumintsbetween : function(x, y) {
		var sum = 0;
		for (var i = Math.floor(x) + 1; i < Math.floor(y); i++) {
			sum += i;
		}
		console.log(sum);
	}
}

test.sumintsbetween(5,10)

function Person(name) {
	this.name = name,
	this.distance_traveled = 0,
	this.sayname = function() {
		console.log(this.name);
		return this;
	}
	this.saysomething = function(arg) {
		console.log(this.name + " says '" + arg + "'");
		return this;
	}
	this.walk = function() {
		alert(this.name + " is walking");
		this.distance_traveled += 3;
		return this;
	}
	this.run = function() {
		alert(this.name + " is running");
		this.distance_traveled += 10;
		return this;
	}
	this.crawl = function() {
		alert(this.name + " is crawling");
		this.distance_traveled += 1;
		return this;
	}
}

var me = new Person('Scott');
me.sayname()
me.saysomething('Behold');
me.walk()
me.run()
me.crawl()
console.log(me.distance_traveled)
console.log(me.sayname().saysomething("Bar").walk().run().crawl())