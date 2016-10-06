function VehicleConstructor(name, numberWheels, passengers) {
	var vehicle = {};
	vehicle.name = name;
	vehicle.numberWheels = numberWheels;
	vehicle.passengers = passengers;

	vehicle.makeNoise = function() {
		console.log("Vroom!");
	}

	return vehicle;
}
var bike = VehicleConstructor("Cannondale", 2, 1);
bike.makeNoise = function() {
		console.log("ring, ring");
	}
bike.makeNoise();

var sedan = VehicleConstructor("Sedan", 4, 5);
sedan.makeNoise = function() {
	console.log("Honk, Honk");
}
sedan.makeNoise();

var bus = VehicleConstructor("Bus", 8, 50);
console.log(bus);
bus.pickup = function(passengers) {
	bus.passengers += passengers;
}
console.log(bus);

bus.pickup(5);
console.log(bus.passengers);


