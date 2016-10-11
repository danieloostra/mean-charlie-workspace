function VehicleConstructor(name, wheels, passengers, speed) {

	var self = this; 
	var distance_travelled = 0; 
	function updateDistance() {
		distance_travelled += self.speed; 
	}
	
	this.name = name,
	this.wheels = wheels,
	this.passengers = passengers,
	this.speed = speed, 
	this.make_noise = function(){
		console.log("Noise");
		} 
	this.move = function(){
			updateDistance();
		    this.make_noise();
	}
	this.checkMiles = function(){
		return distance_travelled;
	}
}

var bus = new VehicleConstructor("bus", 4, 3, 25) 
console.log(bus.checkMiles());
bus.move();
console.log(bus.checkMiles());

// Create a private variable called distance_travelled that starts at 0
// Create a private method called updateDistanceTravelled that increments distance traveled by speed
// Add a method to the Vehicle called “move” that calls 
// updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled

