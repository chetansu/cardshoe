// CARD SHOE

var cards = (function(){
    // SUIT ORDER WILL BE DIAMONDS, CLUBS, HEARTS, SPADES
    var decks = 1;
    var suits = ["diamonds", "clubs", "hearts", "spades"]
    var cardsVal = ["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J","Q", "K"];
    var cards = [];
    var dealtCards = [];

    function init(_decks = 1){
        var count = 0;
        cards = [];
        dealtCards = [];
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
    function getDealtCards(){
        return dealtCards;
    }

    // AFTER EVERY GAME SHUFFLE THE CARDS
    function shuffle(){
       init(decks);
    }

    // FUNC TO DEAL CARDS
    function draw(cardToDraw = 1)
    {
        var drawnCards = [];                                                    // EMPTY ARRAY
            for(var i = 0;i<cardToDraw;i++)
            {
                var randomCardIndex = Math.floor(Math.random() * cards.length + 0);
                var drawnCard = (cards.length > 0)? cards[randomCardIndex]: "";
                cards.splice(randomCardIndex, 1);
                drawnCards.push(drawnCard);
                dealtCards.push(drawnCard);
            }
        return drawnCards;
    }

    // EXPOSED METHODS
    return {
        "shuffle":shuffle,
        "getDealtCards":getDealtCards,
        "draw":draw,
        "setDecks":setDecks
    }
}());

module.exports = cards;
