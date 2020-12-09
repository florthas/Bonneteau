"use strict"
let bouton = document.getElementById('bouton')
bouton.addEventListener('click', melange)

let redCard = 0;



function melange() {
    let allCards = document.getElementsByClassName("carte");
    allCards[redcard].setAttribute('src', "img/red.png")
    let random = Math.floor(Math.random() * allCards.length); 
    let card = allCards[random];
    card.setAttribute('src', "img/black.png");
    redCard = random
}

