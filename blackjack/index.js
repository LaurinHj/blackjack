
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
    name: "Laurin",
    chips: 12
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    if (random > 10) {
        return 10;

    } else if (random === 1) {
        return 11;
    }
    else { return random; }

}
function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent += cards[index] + " ";
    }
    if (sum <= 20) {

        message = "do you want to draw a new card?";
    } else if (sum == 21) {
        message = "congrats! you've got a blackjack";
        hasBlackjack = true;

    } else {
        message = "you're out";
        isAlive = false;
    }

    messageEl.textContent = message;

}
function startGame() {
    if (cards.length === 0) {
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        isAlive = true;
        cards.push(firstCard);
        cards.push(secondCard);
        sum = firstCard + secondCard;
        renderGame();
    }
    else { location.reload(); } //the easiest way to start again to clear what cards we already have 


}


function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();

    }

}
