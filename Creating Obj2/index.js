function VehicleConstructor(name, x, y, z) {
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
    distance_travelled += self.speed;
  }
  var self = this;
  this.name = name;
  this.wheels = x;
  this.passengers = y;
  this.speed = z;
  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
    return this;
  }
  this.makeNoise = function(){
    if(this.name == 'bike'){
      console.log('ring ring!')
      return this;
    }
    if(this.name == 'sedan'){
      console.log('honk honk!')
      return this;
    }
  }
  this.checkMiles = function() {
    console.log(distance_travelled)
    return this;
  }
}

var bike = new VehicleConstructor('bike', 1, 0, 20);
bike.move().move().move()
bike.checkMiles();
bike.move()
bike.checkMiles();






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
