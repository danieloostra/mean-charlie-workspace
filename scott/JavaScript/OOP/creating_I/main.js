"use strict";

class Vehicle {
	constructor(name, numwheels, numpass, speed) {
		this.name = name;
		this.numwheels = numwheels;
		this.numpass = numpass;
		this.speed = speed;
		this._distance_travelled = 0;
		this.vin = null;
		this._update = function() {
			this._distance_travelled += this.speed;
		}
	}
}

Vehicle.prototype.makeNoise = function() {
	console.log('Room')
}

Vehicle.prototype.move = function() {
	this._update();
	this.makeNoise();
}

Vehicle.prototype.checkMiles = function() {
	console.log(this._distance_travelled);
}

Vehicle.prototype.vingen = function() {
	this.vin = Math.floor(Math.random() * 100000000000000000);
}

var bike = new Vehicle('bike', 2, 1);
bike.makeNoise = () => {
	console.log("ring ring!");
}
bike.makeNoise();

var sedan = new Vehicle('sedan', 4, 5);
sedan.makeNoise = () => {
	console.log("Honk Honk!");
}
sedan.makeNoise();

var bus = new Vehicle('bus', 6, 0, 10);
bus.pickup = function(num) {
	this.numpass += num;
}
bus.pickup(5);
console.log(bus.numpass);

bus.move();
bus.checkMiles();
console.log(bus._distance_travelled);

bike.vingen();
console.log(bike.vin)