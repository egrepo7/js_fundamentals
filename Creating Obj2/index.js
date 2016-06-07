function VehicleConstructor(name, x, y, z) {
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
    distance_travelled += this.speed;
  }
  var self = this;
  this.name = name;
  this.wheels = x;
  this.passengers = y;
  this.speed = z;
  this.move = function(){
    this.updateDistanceTravelled();
    this.makeNoise();
  }
  this.checkMiles = function(){
    console.log(this.distance_travelled);
  }
  this.makeNoise = function(){
    if(this.name == 'bike'){
      console.log('ring ring!')
    }
    if(this.name == 'sedan'){
      console.log('honk honk!')
    }
  }
}

var bike = new VehicleConstructor('bike', 1, 0, 20);
console.log(bike.move);
console.log(bike.distance_travelled);
bike.updateDistanceTravelled();
// var sedan = new VehicleConstructor('sedan', 4, 5);
// console.log(sedan);
// sedan.makeNoise();
//
// var bus = new VehicleConstructor('bus', 4, 1);
// bus.pickUpPassengers = function(){
//   this.passengers += 1;
//   console.log(bus.passengers);
// }
// console.log(bus);
// bus.pickUpPassengers();
// bus.pickUpPassengers();
// bus.pickUpPassengers();
