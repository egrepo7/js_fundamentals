////////////////////////////////////////////
// Standalone Functions
////////////////////////////////////////////
// Create a simple for loop that sums all the numbers between x and y. Have it console log the final sum
function sumAll(x, y) {
  var sum = 0;
  for(var i = x; i < y + 1; i++){
    sum += i;
  }
  console.log(sum);
}

// Write a loop that will go through an array, find the minimum value, and then return it
function findMin(array) {
  var min = array[0]
  for(var i = 1; i < array.length; i++) {
    if(array[i] < min){
      min = array[i];
    }
  }
  return min;
}

// Write a loop that will go through an array, find the average of all of the values, and then return it
function avgArray(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length;
}

////////////////////////////////////////////
// Anonymous Functions
////////////////////////////////////////////
var sumAll = function(x, y) {
  var sum = 0;
  for(var i = x; i < y + 1; i++){
    sum += i;
  }
  console.log(sum);
}

var min = function(array) {
  var min = array[0]
  for(var i = 1; i < array.length; i++) {
    if(array[i] < min){
      min = array[i];
    }
  }
  return min;
}

var avg = function(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum/array.length;
}

////////////////////////////////////////////
// Object
////////////////////////////////////////////

var part1 = {};
part1 = {
  sumAll: function(x, y) {
    var sum = 0;
    for(var i = x; i < y + 1; i++){
      sum += i;
    }
    console.log(sum);
  },
  arrMin: function(array) {
    var min = array[0]
    for(var i = 1; i < array.length; i++) {
      if(array[i] < min){
        min = array[i];
      }
    }
    return min;
  },
  arrAvg: function(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum/array.length;
  }
}
////////////////////////////////////////////
// Person Object
////////////////////////////////////////////

var person = {
  name: 'Edgar',
  distance_traveled: 0,
  say_name: function(){
    console.log(person.name)
  },
  say_something: function(sentence){
    console.log(person.name + ' says ' + sentence)
  },
  walk: function(){
    console.log(person.name + ' is walking')
    person.distance_traveled += 3
  },
  run: function(){
    console.log(person.name + ' is running')
    perosn.distance_traveled += 10
  },
  crawl: function(){
    console.log(person.name + ' is crawling')
    person.distance_traveled += 1
  }
}

person.walk()
person.say_name()
