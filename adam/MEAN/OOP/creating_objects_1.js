function VehicleConstructor(name, wheels, passengers){
	var vehicle = {};
	vehicle.name = name;
	vehicle.wheels = wheels;
	vehicle.passengers = passengers;
	vehicle.makeNoise = () => { console.log("Honk!");}
	return vehicle;
}

var bike = VehicleConstructor(bike, 2, 1);
bike.makeNoise = () => { console.log("ring ring!");}
bike.makeNoise()

var sedan = VehicleConstructor(sedan, 4, 6);
sedan.makeNoise = () => { console.log("Honk honk!");}
sedan.makeNoise()

var bus = VehicleConstructor(bus, 4, 20);
bus.pickup = (passengers) => { return bus.passengers+= passengers;}
console.log(bus.pickup(4));