var Deck = function() {
	this.deck = [];
	this.populate = function() {
		var suit = '';
		var count = 0;
		for (var i = 0; i < 4; i++) {
			for (var j = 1; j < 14; j++) {
				if (i == 0){
					this.deck[count] = ['Spade', j];
				} else if (i == 1) {
					this.deck[count] = ['Heart', j];
				} else if (i == 2) {
					this.deck[count] = ['Club', j];
				} else if (i == 3) {
					this.deck[count] = ['Diamond', j];
				}
				count++;
			}
		}
		return this.deck;
	}
	this.shuffle = function() {
		var varlen = this.deck.length;
		while (varlen) {
			var ind = Math.floor(Math.random() * varlen--);
			var temp = this.deck[varlen];
			this.deck[varlen] = this.deck[ind];
			this.deck[ind] = temp;
		}
	}
	this.reset = function() {
		this.deck = [];
		this.populate();
	}
	this.dealRandom = function() {
		var rand = Math.floor(Math.random() * 52);
		if (this.deck[rand]) {
			var give = this.deck[rand];
			delete this.deck[rand]
			return give;
		}
	}
}

var Person = function(name) {
	this.name = name;
	this.hand = [];
	this.takeCard = function(deck) {
		this.hand.push(deck.dealRandom());
		return this;
	}
	this.discard = function(card) {
		for (var e in this.hand) {
			if (this.hand[e] == card) {
				delete this.hand[e];
			}
		}
		return this;
	}
}

function simulateBlackJack(deck, user) {
	var dealer = new Person('Jack');
	deck.populate();
	deck.shuffle();

	var count = 0;

	alert("Draw a card when you're ready!");

	user.takeCard();
	dealer.takeCard();

	if (confirm("You just drew a " user.hand[0] "! Draw again?")) {
		user.takeCard();
		dealer.takeCard();
	} else {
		alert("Your total is: " + user.hand[0] + "! " )
	}

	console.log("Game over! Your cards add up to: " + count);
}

simulateBlackJack(new Deck(), new Person('Scott'))