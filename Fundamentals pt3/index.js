// function personConstructor(name){
//   var person = {
//     name: name,
//     distance_traveled: 0,
//     say_name: function(){
//       console.log(person.name)
//     },
//     say_something: function(sentence){
//       console.log(person.name + ' says ' + sentence)
//     },
//     walk: function(){
//       console.log(person.name + ' is walking')
//       person.distance_traveled += 3
//     },
//     run: function(){
//       console.log(person.name + ' is running')
//       perosn.distance_traveled += 10
//     },
//     crawl: function(){
//       console.log(person.name + ' is crawling')
//       person.distance_traveled += 1
//     }
//   }
//   return person;
// }
//
// var edgar = personConstructor('Edgar')
// console.log(edgar)
// edgar.say_something('hello')
// edgar.crawl()
// console.log(edgar)

function ninjaConstructor(name, cohort){
  var ninja = {
    name: name,
    cohort: cohort,
    beltlevel: 'yellow-belt',
    levelUp: function(belt){
      ninja.beltlevel = belt
    }
  }
  return ninja;
}

var blackninja = ninjaConstructor('Hanzo', 'Overwatch')
blackninja.levelUp('black-belt')
console.log(blackninja.name)
