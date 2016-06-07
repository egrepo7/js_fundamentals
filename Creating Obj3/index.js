function VehicleConstructor(name, x, y, z) {
  var self = this;
  this.name = name;
  this.wheels = x;
  this.passengers = y;
  this.speed = z;
  this.vin = Math.floor(Math.random() * 1000000)
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
    distance_travelled += self.speed;
  }
  VehicleConstructor.prototype.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
    return this;
  }
  VehicleConstructor.prototype.makeNoise = function(){
    if(this.name == 'bike'){
      console.log('ring ring!')
      return this;
    }
    if(this.name == 'sedan'){
      console.log('honk honk!')
      return this;
    }
  }
  VehicleConstructor.prototype.checkMiles = function() {
    console.log(distance_travelled)
    return this;
  }
  VehicleConstructor.prototype.showVin = function() {
    console.log(self.vin);
    return this;
  }
}

var bike = new VehicleConstructor('bike', 1, 0, 20);
bike.move()
bike.checkMiles()
bike.move().move()
bike.checkMiles()
bike.showVin()





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
