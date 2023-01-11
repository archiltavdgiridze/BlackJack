
let player = {
  name: "Archil",
  chips: 200
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");


playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard() {
  // Random number between 1 and 13 (both included) and then return 10 if it's greater than 10 and 11 if it's 1 (Ace) and otherwise return the number itself 
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  console.log(randomNumber)
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  // Reset the game
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  // Render the game to the screen 
  cardsEl.textContent = "Cards: ";
  // Loop through the cards array and add the cards to the cardsEl
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    alert('Do you want to start again? Click "Start Game"')
    message = "You're out of the game!";
    isAlive = false;
  }
  // Render the message to the screen
  messageEl.textContent = message;
}

function newCard() {
  // Check if the game is still going on and if the player has Blackjack and if so, draw a new card and add it to the sum and to the cards array and then render the game again 
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
