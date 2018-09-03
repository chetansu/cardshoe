 // CARD SHOE

var cards = (function(){
    // SUIT ORDER WILL BE DIAMOND, CLUB, HEART, SPADE
    var suits = ["Diamond", "Clubs", "Heart", "Spade"]
    var cardsVal = ["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J","Q", "K"];
    var cards = [];
    var cardsDealt = [];

    function init(){
        var count = 0;
        for(var i =0;i<suits.length;i++)
        {
            for(var j=0;j<cardsVal.length;j++)
            {
                cards[count] = suits[i]+"-"+cardsVal[j];
                count++;
            }
        }
        cardsDealt = [];
    }

    init();

    // FUNC TO RETURN THE CARDS THAT WERE ALREADY DEALT
    function getDealtCards(){
        return cardsDealt;
    }

    function shuffle(){
       init();
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
        "getDealtCards":getDealtCards,
        "deal":deal
    }
}());

exports.cards = cards;