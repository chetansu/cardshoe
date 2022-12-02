 var http = require('http');
var card_shoe = require('./index.js');

// deal 1 card at a time
for(var i =0;i<8;i++)
{
    console.log( card_shoe.draw(1));
}

console.log(card_shoe.getDealtCards());

card_shoe.shuffle();
// deal 5 card at a time
for(var i =0;i<10;i++)
{
    console.log( card_shoe.draw(5));
}

card_shoe.shuffle();
// deal 8 cards and check the dealt cards
for(var i = 0;i<8;i++)
{
    console.log(card_shoe.draw());
}
console.log(card_shoe.getDealtCards());

// create card shoe with 2 decks
card_shoe.setDecks(2);
for(var i =0;i<20;i++)
{
    console.log( card_shoe.draw(5));
}