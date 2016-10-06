// function Vehicle(name, wheels, passengers, speed){
// 	// PRIVATE
// 	var distance_traveled = 0;
// 	var updateDistanceTravelled = () => { distance_traveled += this.speed }
// 	// PUBLIC
// 	this.name = name;
// 	this.wheels = wheels;
// 	this.passengers = passengers;
// 	this.speed = speed;
// 	// PUBLIC METHODS DECLARED HERE
// 	this.makeNoise = () => { console.log("Honk!");}
// 	this.move = () => {updateDistanceTravelled(); this.makeNoise();} 
// 	this.checkMiles = () => { console.log(distance_traveled);}
// }
"use strict";
class Vehicular {

	constructor(name, wheels, passengers, speed){
		this.name = name;
		this.wheels = wheels;
		this.passengers = passengers;
		this.speed = speed;
		var distance_traveled = 0;
		this.getDistance = function(distance_traveled) { return distance_traveled=distance_traveled}
		var updateDistanceTravelled = () => { distance_traveled += this.speed }
	}
	// PUBLIC METHODS DECLARED HERE
	makeNoise () { 
		console.log("Honk!");
	}
	move () {
		// updateDistanceTravelled(); 
		this.makeNoise();
	} 
	checkMiles ()
	{ 
		console.log(this.getDistance);
	}
}

var Bike = new Vehicular('bike', 2, 1, 5);
Bike.makeNoise = () => { console.log("ring ring!");}
Bike.move()
Bike.move()
Bike.checkMiles()

// var Bike = new Vehicle('bike', 2, 1);
// Bike.makeNoise = () => { console.log("ring ring!");}
// Bike.makeNoise()

// var sedan = new Vehicle(sedan, 4, 6);
// sedan.makeNoise = () => { console.log("Honk honk!");}
// sedan.makeNoise()

// var bus = new Vehicle(bus, 4, 20);
// bus.pickup = (passengers) => { return bus.passengers+= passengers;}
// console.log(bus.pickup(4));

// var Bike = new Vehicle('bike', 2, 1, 5);
// Bike.makeNoise = () => { console.log("ring ring!");}
// Bike.move()
// Bike.move()
// Bike.checkMiles()
