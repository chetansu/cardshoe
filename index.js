// CARD SHOE

const cards = (() => {
    // SUIT ORDER WILL BE DIAMONDS, CLUBS, HEARTS, SPADES
    let decks = 1;
    const suits = ["diamonds", "clubs", "hearts", "spades"];
    const cardsVal = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const delimiter = "-";
    let cards = [];
    let dealtCards = [];

    const init = () => {
        var count = 0;
        cards = [];
        dealtCards = [];

        for (let i = 0; i < decks; i++) {
            suits.map((suit) => {
                cardsVal.map((cardVal) => {
                    cards[count] = suit + delimiter + cardVal;
                    count++;
                });
            });
        }
    };

    // IF MORE THAN 1 SET THEN YOU NEED TO SET THE DECK COUNT
    const setDecks = (deckCount) => {
        decks = deckCount;
        init();
    };

    // FUNC TO RETURN THE CARDS THAT WERE ALREADY DEALT
    const getDealtCards = () => dealtCards;

    // FUNC TO DEAL CARDS
    const draw = (cardToDraw = 1) => {
        let drawnCards = [];
        for (let i = 0; i < cardToDraw; i++) {
            let randomCardIndex = Math.floor(Math.random() * cards.length + 0);
            try {
                if (cards.length > 0) {
                    let drawnCard = cards[randomCardIndex];
                    cards.splice(randomCardIndex, 1);
                    drawnCards.push(drawnCard);
                    dealtCards.push(drawnCard);
                } else {
                    throw new Error("card shoe empty : There are no more cards in card shoe left.");
                }
            } catch (e) {
                console.error(e.stack);
                process.exit();
            }
        }
        return drawnCards;
    };

    init();

    // EXPOSED METHODS
    return {
        "shuffle": init,
        "getDealtCards": getDealtCards,
        "draw": draw,
        "setDecks": setDecks
    };
})();

module.exports = cards;
