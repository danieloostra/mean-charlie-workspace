function VehicleConstructor(name, wheels, passengers, speed) {
  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
	this.distance_travelled = 0;
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;
	this.vin = createVin();

	function createVin(){
	var vin = '';
	for (var i = 0; i < 17; i+=1 ){
		// Use Math.floor and Math.random to generate random index to access character from char string
		vin += chars[Math.floor(Math.random()*35)];
	}
		return vin;
	}
}
VehicleConstructor.prototype.make_noise = function(){
	console.log("Noise");
	return this;
};

VehicleConstructor.prototype.updateDistance = function() {
	distance_travelled += this.speed;
	console.log(this.distance_travelled);
	return this;
};

VehicleConstructor.prototype.move = function(){
			this.updateDistance();
		    this.make_noise();
				return this;
	};

VehicleConstructor.prototype.checkMiles = function(){
	return distance_travelled;
};

	var car = new VehicleConstructor("car", 4, 4, 25);
	console.log(car);
