let msg = document.querySelector("#msg");
let cards = document.querySelector("#cards");
let sum = document.querySelector("#sum");
let start = document.querySelector("#start");
let newCard = document.querySelector("#newCard");
let player=document.querySelector("#player");

let playerInfo={
    name:"Surjeet",
    credits:145
}

player.textContent=`${playerInfo.name}: $${playerInfo.credits}`

let message = "";
let hasBlackjacked = false;
let isAlive = false;
let sumOfCards = 0;
let cardsArray=[];



start.addEventListener("click", startGame);


function startGame() {
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    sumOfCards = firstCard + secondCard;
    cardsArray=[firstCard,secondCard];
    
    renderGame();
}


function renderGame() {
    cards.textContent = "Cards: ";
    for(let i=0;i<cardsArray.length;i++){
        cards.textContent+= cardsArray[i]+" ";
    }
    sum.textContent = "Sum: " + sumOfCards;
    if (sumOfCards < 21) {
        message = "Do you want to draw a new card?";
    } else if (sumOfCards === 21) {
        message = "You've got Blackjack!";
        hasBlackjacked = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    msg.textContent = message;
}

newCard.addEventListener("click", function () {
    if(hasBlackjacked===false&&isAlive===true){
        let card = getRandomNumber();
        cardsArray.push(card);
        sumOfCards += card;
        renderGame();
    }
});

function getRandomNumber(){
    let randomNumber=Math.floor(Math.random()*13)+1;
    if(randomNumber===1){
        return 11;
    }else if(randomNumber>10){
        return 10;
    }else{
        return randomNumber;
    }
}


const a=1;
console.log(a);
