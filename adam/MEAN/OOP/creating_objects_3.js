function Vehicle(name, wheels, passengers, speed){
	if(!(this instanceof Vehicle)){
		return new Vehicle(name, wheels, passengers, speed)
	}
	// PRIVATE
	var self = this;
	var distance_traveled = 0;
	function updateDistanceTraveled (){
	 distance_traveled += self.speed; 
	}
	var vin = Array(17+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, 17)
	// PUBLIC
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;
	this.move = () => {updateDistanceTraveled(); this.makeNoise();} 
	this.get_vin = vin;
}

Vehicle.prototype.makeNoise = function(noise){ 
	var noise = noise || "Honk Honk";
	console.log(noise); 
	return this;
} 
Vehicle.prototype.checkMiles = () => { console.log(get_distance_traveled);}

var Bike = new Vehicle('bike', 2, 1, 30);
console.log(Bike)
console.log(Bike.get_vin)
Bike.makeNoise().makeNoise();
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
