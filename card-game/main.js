
let count = document.getElementById('count');
let allCards = document.getElementsByClassName('scene');
let counterCard = document.getElementById ('cardOne');
let counter = 0;
let numberCounter = 0;
let cardsFlipped = 0; 
let clickedCard = null;
let cardOne = null;
let cardTwo = null;
let isflipped = false;
let counterh1 = document.getElementById ('countNumber');
let button = document.getElementsByTagName ('button');
let card = document.querySelectorAll('.card');



counterCard.style.pointerEvents = 'none';
let reflip = function (){
    cardOne.classList.toggle('is-flipped');
    cardTwo.classList.toggle('is-flipped');
}


let lockCards = function (){
    for (let i = 0; i < card.length; i++){
        card[i].style.pointerEvents = 'none';
    }
}

let unlockCards = function (){
    for (let i = 0; i < card.length; i++){
        if (card[i] !== counterCard){
            card[i].style.pointerEvents = 'auto';
        }       
    }
}

let resetCards = function(){
    cardOne = null;
    cardTwo = null;
}




for (let i = 0; i < card.length; i++){
    
    card[i].addEventListener('click',function (){
   
        if (cardsFlipped === 0){
                cardOne = card[i];
            } else if (cardsFlipped === 1){
                cardTwo = card[i];
            }
       
        isflipped = true;
        counter++;
        numberCounter++;
        cardsFlipped++;
        card[i].classList.toggle('is-flipped');
        clickedCard = card[i];
        counterh1.innerHTML = counter;
        count.style.pointerEvents = 'none';
       

        if (cardOne !== null && cardTwo !== null && cardOne.classList.contains ('is-flipped') && cardTwo.classList.contains('is-flipped') && cardOne.classList.value === cardTwo.classList.value){
            cardOne.style.pointerEvents = 'none';
            cardTwo.style.pointerEvents = 'none';
            cardOne = null;
            cardTwo = null;
            cardsFlipped = 0;
        } else if (card[i].classList.contains('is-flipped') && cardsFlipped === 2){
            lockCards();
            card[i].style.pointerEvents = 'none';
            setTimeout(reflip, 2000);   
            setTimeout (unlockCards, 3000);
            setTimeout(resetCards, 3000);
            cardsFlipped = 0;

        } 
        
        for (let i = 0; i < card.length; i++){
            if (card[i].classList.contains('is-flipped')){
                card[i].style.pointerEvents = 'none';
    
            } 
        }
        

        
    });    
}


