// Create a Deck object constructor. A deck should have the following functionality:
//
// The Deck should contain the 52 standard cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random card
// Deal should return the card that was dealt and remove it from the deck
// Now create a Player object constructor. A Player should have the following functionality:
//
// The Player should have a name
// The Player should have a hand
// The Player should be able to take a card (use the deck.deal method)
// The Player should be able to discard a card
// Optional:
//
// Create a blackjack game with your deck of cards!
function Player(name){
  var myName = name
  var myHand = []
  this.takeCard = function(card){
    myHand.push(card)
  }
  this.discard = function(index){
    myHand.splice(index, 1)
  }
  this.showHand = function(){
    console.log(myHand)
  }
}

function Deck(){
  var deck = []
  var suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
  var faces = ['Jack', 'Queen', 'King', 'Ace']
  var generate = function(){
    for(var suit in suits){
      for(var i = 2; i < 11; i++){
        deck.push(i + ' of ' + suits[suit])
      }
      for(var face in faces){
        deck.push(faces[face] + ' of ' + suits[suit])
      }
    }
    console.log(deck)
  }
  generate()
  this.reset = function() {
    deck = []
    generate();
  }
  this.shuffle = function() {
    // var newDeck = []
    for (var i = 0; i < deck.length; i++){
      var spot = Math.floor(Math.random() * deck.length)
      console.log(temp, deck[temp])
      var temp = deck[i]
      deck[i] = deck[spot]
      deck[spot] = temp
    }
    console.log(deck)
  }
  this.deal = function() {
    var spot = Math.floor(Math.random() * deck.length)
    var card = deck[spot]
    deck.splice(spot, 1)
    return card
  }
}

var myDeck = new Deck()
// myDeck.reset()
myDeck.shuffle()
// console.log(myDeck.deal())

var Jeff = new Player('Dave')
Jeff.showHand()
Jeff.takeCard(myDeck.deal())
Jeff.takeCard(myDeck.deal())
Jeff.takeCard(myDeck.deal())
Jeff.takeCard(myDeck.deal())
Jeff.showHand()
