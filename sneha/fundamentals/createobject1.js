function VehicleConstructor(name, wheels, passengers) {
	var vehicle = {}; 
	vehicle.name = name,
	vehicle.wheels = wheels,
	vehicle.passengers = passengers,
	vehicle.make_noise = function(){
		console.log("Noise");
	}
	return vehicle; 
}

// #using constructor, make a bike
var bike = VehicleConstructor("Bike", 2, 2);

bike.make_noise = function() {
	console.log("Ring Ring");
}
bike.make_noise(); 

var sedan = VehicleConstructor("Sedan", 4, 6);
sedan.make_noise = function() {
	console.log("Honk Honk")
}
sedan.make_noise(); 

var bus = VehicleConstructor("Bus", 4, 10);
bus.pickUpPassengers = function(passengers){
	bus.passengers += passengers;
}
console.log(bus)