 // CARD SHOE

var cards = (function(){
    // SUIT ORDER WILL BE DIAMOND, CLUB, HEART, SPADE
    var decks = 1;
    var suits = ["Diamond", "Clubs", "Heart", "Spade"]
    var cardsVal = ["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J","Q", "K"];
    var cards = [];
    var cardsDealt = [];

    function init(_decks = 1){
        var count = 0;
        cards = [];
        cardsDealt = [];
        for(var i = 0;i<_decks;i++)
        {
            for(var j =0;j<suits.length;j++)
            {
                for(var k=0;k<cardsVal.length;k++)
                {
                    cards[count] = suits[j]+"-"+cardsVal[k];
                    count++;
                }
            }
        }
    }

    function setDecks(_decks = 1)
    {
        decks = _decks;
        init(_decks);
    }

    init(1);        // DEFAULT INITIALIZE 1 SET

    // FUNC TO RETURN THE CARDS THAT WERE ALREADY DEALT
    function dealtCards(){
        return cardsDealt;
    }

    // AFTER EVERY GAME SHUFFLE THE CARDS
    function shuffle(){
       init(decks);
    }

    // FUNC TO DEAL CARDS
    function deal(cardToDeal = 1)
    {
        var chosenCards = [];                                                    // EMPTY ARRAY
            for(var i = 0;i<cardToDeal;i++)
            {
                var randomCardIndex = Math.floor(Math.random() * cards.length + 0);
                var dealCard = (cards.length > 0)? cards[randomCardIndex]: "";
                cards.splice(randomCardIndex, 1);
                chosenCards.push(dealCard);
                cardsDealt.push(dealCard);
            }
        return chosenCards;
    }

    // EXPOSED METHODS
    return {
        "shuffle":shuffle,
        "dealtCards":dealtCards,
        "deal":deal,
        "setDecks":setDecks
    }
}());

exports.cards = cards;