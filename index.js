var http = require('http');
var card_shoe = require('./cardshoe.js').cards;


// deal 1 card at a time
for(var i =0;i<52;i++)
{
    console.log( card_shoe.deal(1));
}

card_shoe.shuffle();
// deal 5 card at a time
for(var i =0;i<11;i++)
{
    console.log( card_shoe.deal(5));
}

card_shoe.shuffle();
// deal 8 cards and check the dealt cards
for(var i = 0;i<8;i++)
{
    console.log(card_shoe.deal());
}
console.log(card_shoe.getDealtCards());