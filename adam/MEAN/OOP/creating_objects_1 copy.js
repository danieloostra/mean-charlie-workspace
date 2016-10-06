function Vehicle(name, wheels, passengers){
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.makeNoise = () => { console.log("Honk!");}
}

var Bike = new Vehicle('bike', 2, 1);
Bike.makeNoise = () => { console.log("ring ring!");}
Bike.makeNoise()

