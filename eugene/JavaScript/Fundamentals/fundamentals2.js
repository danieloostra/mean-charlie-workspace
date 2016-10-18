function xToY(x, y){
	var sum =0;
	for(var i=x; i<=y; i++){
		sum += i;
	}
	console.log(sum);
}

function findMin(arr){
	var min = arr[0];
	for(var i=0; i<arr.length; i++){
		if(min > arr[i])
			min = arr[i];
	}
	return min
}

function findAve(arr){
	var sum = 0;
	for(var i=0; i<arr.length; i++){
		sum += arr[i];
	}
	return sum/arr.length
}

var function1 = function(x, y){
	var sum =0;
	for(var i=x; i<=y; i++){
		sum += i;
	}
	console.log(sum);
}

var function2 = function(arr){
	var min = arr[0];
	for(var i=0; i<arr.length; i++){
		if(min > arr[i])
			min = arr[i];
	}
	return min
}

var function3 = function(arr){
	var sum = 0;
	for(var i=0; i<arr.length; i++){
		sum += arr[i];
	}
	return sum/arr.length
}

var functions = {
	func1: function(x, y){
		var sum =0;
		for(var i=x; i<=y; i++){
			sum += i;
		}
		console.log(sum);
	},
	func2: function(arr){
		var min = arr[0];
		for(var i=0; i<arr.length; i++){
			if(min > arr[i])
				min = arr[i];
		}
		return min
	},
	func3: function(arr){
		var sum = 0;
		for(var i=0; i<arr.length; i++){
			sum += arr[i];
		}
		return sum/arr.length
	}
}

var person = {
	name: "Eugene Park",
	distance_traveled: 0,
	say_name: function(){console.log(this.name);},
	say_something: function(string){console.log(this.name+" says \'"+string+"\'");},
	walk: function(){alert(this.name+" is walking"); this.distance_traveled+=3;},
	run: function(){alert(this.name+" is running"); this.distance_traveled+=10;},
	crawl: function(){alert(this.name+" is crawling"); this.distance_traveled+=1;}
}