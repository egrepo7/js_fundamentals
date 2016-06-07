function VehicleConstructor(name, x, y) {
  var vehicle = {};
  vehicle.name = name;
  vehicle.wheels = x;
  vehicle.passengers = y;
  vehicle.makeNoise = function(){
    if(this.name == 'bike'){
      console.log('ring ring!')
    }
    if(this.name == 'sedan'){
      console.log('honk honk!')
    }
  }
  return vehicle;
}

var bike = VehicleConstructor('bike', 1, 0);
console.log(bike);
bike.makeNoise();

var sedan = VehicleConstructor('sedan', 4, 5);
console.log(sedan);
sedan.makeNoise();

var bus = VehicleConstructor('bus', 4, 1);
bus.pickUpPassengers = function(){
  this.passengers += 1;
  console.log(bus.passengers);
}
console.log(bus);
bus.pickUpPassengers();
bus.pickUpPassengers();
bus.pickUpPassengers();
