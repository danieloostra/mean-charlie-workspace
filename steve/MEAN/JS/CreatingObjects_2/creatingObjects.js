function VehicleConstructor(name, numberWheels, passengers, speed) {
  this.name = name;
  this.numberWheels = numberWheels;
  this.passengers = passengers;
  this.speed = speed;
  var distance_traveled = 0;
  var updateDistanceTraveled = function(){
    distance_traveled += speed;
  }
  this.makeNoise = function() {
    console.log("Vroom!");
  }
  this.move = function(){
    updateDistanceTraveled();
    makeNoise();  
  }
  this.checkMiles = function(){
    console.log(distance_traveled);
  }
}

var bike = new VehicleConstructor("Cannondale", 2, 1);
bike.makeNoise = function() {
    console.log("ring, ring");
  }
bike.makeNoise();

var sedan = new VehicleConstructor("Sedan", 4, 5);
sedan.makeNoise = function() {
  console.log("Honk, Honk");
}
sedan.makeNoise();

var bus = new VehicleConstructor("Bus", 8, 50);
console.log(bus);
bus.pickup = function(passengers) {
  bus.passengers += passengers;
}
console.log(bus);

bus.pickup(5);
console.log(bus.passengers);


