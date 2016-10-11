function Vehicle(name, numberWheels, passengers, speed) {
  this.name = name;
  this.numberWheels = numberWheels;
  this.passengers = passengers;
  this.speed = speed;
  Vehicle.prototype.vin = 
  Vehicle.prototype.distance_traveled = 0;
  Vehicle.prototype.updateDistanceTraveled = function(){
    distance_traveled += speed;
  }
  Vehicle.prototype.makeNoise = function() {
    console.log("Vroom!");
  }
  Vehicle.prototype.move = function(){
    updateDistanceTraveled();
    makeNoise();  
  }
  Vehicle.prototype.checkMiles = function(){
    console.log(distance_traveled);
  }
  Vehicle.prototype.addVin = function() {
  }
}
var bike = new Vehicle("Cannondale", 2, 1);
bike.makeNoise = function() {
    console.log("ring, ring");
  }
bike.makeNoise();
var sedan = new Vehicle("Sedan", 4, 5);
sedan.makeNoise = function() {
  console.log("Honk, Honk");
}
sedan.makeNoise();
var bus = new Vehicle("Bus", 8, 50);
console.log(bus);
bus.pickup = function(passengers) {
  bus.passengers += passengers;
}
console.log(bus);
bus.pickup(5);
console.log(bus.passengers);