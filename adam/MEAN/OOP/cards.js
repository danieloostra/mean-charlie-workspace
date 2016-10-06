function Card(rank, suit){
  this.rank = rank;
  this.suit = suit;
}

function Deck(n) {

  var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9",
                        "10", "J", "Q", "K");
  var suits = new Array("C", "D", "H", "S");
  var i, j, k;
  var m;

  m = ranks.length * suits.length;

  // Set array of cards.

  this.cards = new Array(n * m);

  // Fill the array with 'n' packs of cards.

  for (i = 0; i < n; i++){
    for (j = 0; j < suits.length; j++){
      for (k = 0; k < ranks.length; k++){
        this.cards[i * m + j * ranks.length + k] = 
          new Card(ranks[k], suits[j]);
      }
    }
  }
  this.shuffle = function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
  this.deal = function() {

    if (this.cards.length > 0)
      return this.cards.shift();
    else
      return null;
    }
}

deck = new Deck(1)

function Player(name, deck){
  this.hand = [];
  this.name = name;
  this.deal_hand = function(){
    deck.shuffle(deck.cards);
    i = 7
    while(i>0){
      this.hand.push(deck.deal());
      i--;
    }
    return this;
  }
  this.take = function(){
    this.hand.push(deck.deal());
    return this;
  }
  this.discard = function(index){
    var index = index || 0
    if(this.hand.length>index){
      this.hand.splice(index,1);
    }
    return this;
  }
}

Rainman = new Player('Rainman', deck);
console.log(Rainman.deal_hand().hand);
console.log(Rainman.take().hand);
console.log(Rainman.discard(1).discard().hand);



