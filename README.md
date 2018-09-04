# CardShoe

CardShoe is a node library written for casino game developers, who want to develop a card based game and are looking for a card shoe that will provide them with access to deal & shuffle the cards.

# Git Repository
https://github.com/chetansu/cardshoe

### Installation

CardShoe requires [Node.js](https://nodejs.org/) v4+ to run.

```sh
$ npm install -g cardshoe
```

### Development

```sh
var card_shoe = require('cardshoe');
```
Once imported the library will create a 1 deck card shoe with 52 cards by default.
for having more than 1 deck of cards 

```sh
card_shoe.cards.setDecks(2);  // CREATES 2 SETS OF CARDS
card_shoe.cards.setDecks(3);  // CREATES 3 SETS OF CARDS
card_shoe.cards.setDecks(n);  // CREATES n SETS OF CARDS
```

to pull cards use the following  
```sh
card_shoe.cards.draw(1)       // FOR DEALING 1 CARD - RETURNS ARRAY OF LENGTH 1
card_shoe.cards.draw(2)       // FOR DEALING 2 CARDS - RETURNS ARRAY OF LENGTH 2
card_shoe.cards.draw(n)       // FOR DEALING n CARDS - RETURNS ARRAY OF LENGTH n
```

to get the history of all cards dealt
```sh
card_shoe.cards.getDealtCards()       // RETURNS ALL THE DEALT CARD INFO AS AN ARRAY
```

After the end of each game call the shuffle to reset the card_shoe with the predefined set of decks
```sh
card_shoe.cards.shuffle();
```


### Todos

 - Write Tests

License
----

ISC


**Free Software, Hell Yeah!**


