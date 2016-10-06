// Constructor will a deck object that holds 52 card objects within an array. The Card objects will hold a particular suit and rank. At first they will be in order. There will be a method to reset the deck (put the deck in order). Method is shuffle or put the cards in the deck into a random order. Deck method will be reset, or put the deck into order. 

function Deck() {
	var suits = ['diamonds', 'clubs', 'hearts', 'spades'];
	var values = ['ace', '2', '3', '4', '5', '6,', '7', '8', '9', '10', 'jack', 'queen', 'king'];
	self = this;

	this.cards = [];

	suits.forEach(function(suit) {
		values.forEach(function(value){
			self.cards.push(new Card(value, suit));
		});
	});

}

Deck.prototype.shuffle = function() {
	var unshuffledEdge = this.cards.length,
	cardToShuffleIdx,
	temp;

	while (unshuffledEdge > 0) {
		cardToShuffleIdx = Math.floor(Math.random() * unshuffledEdge);
		unshuffledEdge -= 1;

		temp = this.cards[cardToShuffleIdx];
		this.cards[cardToShuffleIdx] = this.cards[unshuffledEdge];
		this.cards[unshuffledEdge] = temp; 
	}
	return this;
}


Deck.prototype.reset = function() {
	this.buildDeck().shuffle();
}
Deck.prototype.dealRandomCard = function() {
	if (this.cards.length > 0){
		return this.cards.pop();
	}
}

function Card(value, suit) {
	this.value = value;
	this.suit = suit;

}

function Player(name, hand) {
	this.name = name;
	this.hand = hand;
}

Player.prototype.takeCard = function(deck) {
	this.hand.push(deck.dealRandomCard());
	return this;
}

Player.prototype.discardCard = function(cardIdx) {
	if (this.hand.length > cardIdx){
		this.hand.splice(cardIdx, 1);
	}
	return this;
}

var charlie = new Player('charlie')
var deck = new Deck()