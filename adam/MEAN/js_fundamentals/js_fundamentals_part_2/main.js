function xAndY(x, y){
	var sum = 0
	for(var i = x; i<=y; i++){
			sum += i;
	}
	return sum
}

function min(arr){
	var min = arr[0]
	for(var i=1; i<arr.length; i++){
		if(arr[i]<min){
			min = arr[i]
		}
	}
	return min;
}

function avg(arr){
	var sum = 0
	for(var i=0; i<arr.length; i++){
		sum += arr[i];
	}
	var avg = sum/arr.length;
	return avg
}

var xAndY = function(x, y){
	var sum = 0
	for(var i = x; i<=y; i++){
			sum += i;
	}
	return sum
}

var min = function(arr){
	var min = arr[0]
	for(var i=1; i<arr.length; i++){
		if(arr[i]<min){
			min = arr[i]
		}
	}
	return min;
}

var avg = function(arr){
	var sum = 0
	for(var i=0; i<arr.length; i++){
		sum += arr[i];
	}
	var avg = sum/arr.length;
	return avg
}

var arr = [1,5,90,25,-3,0];
console.log(min(arr))

var functions = {
	xAndY:xAndY,
	min:min,
	avg:avg
}
console.log(functions.min(arr))

var person = {
	name:'Adam',
	distance_traveled:0,
	say_name: function(){
		alert(this.name)},
	say_something: function(param){
		console.log(this.name + " says " + param)},
	walk: function(){
		alert(this.name + " is walking.");
		this.distance_traveled+=3
	},
	crawl: function(){
		alert(this.name + " is crawling.");
		this.distance_traveled+=1
	},
	run: function(){
		alert(this.name + " is running.");
		this.distance_traveled+=10
	}
}

person.say_something('I love batman')
person.say_name()

