 // CARD SHOE

var cards = (function(){
    console.log("cards");
    // SUIT ORDER WILL BE DIAMOND, CLUB, HEART, SPADE
    var suits = ["Diamond", "Clubs", "Heart", "Spade"]
    var cardsVal = ["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J","Q", "K"];
    var cards = [];
    var cardsDealt = [];

    function init(){
        console.log("init");
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
        console.log("getDealtCards");
        return cardsDealt;
    }

    function shuffle(){
        console.log("shuffle");
       init();
    }

    // FUNC TO DEAL CARDS
    function deal(cardToDeal = 1)
    {
        console.log("deal");
        console.log(cardToDeal);
        var cardsToDeal = [];                                                        // EMPTY ARRAY
        for(var i = 0;i<cardToDeal;i++)
        {
            console.log("Entering "+i)
            var randomCardIndex = Math.floor(Math.random() * cards.length + 0);    //
            var dealCard = cards[randomCardIndex];
            cards.splice(randomCardIndex, 0);
            cardsToDeal.push(dealCard);
            cardsDealt.push(dealCard);

        }
        return cardsToDeal;
    }

    return {
        "shuffle":shuffle,
        "getDealtCards":getDealtCards,
        "deal":deal
    }
})();


exports.cards = cards;