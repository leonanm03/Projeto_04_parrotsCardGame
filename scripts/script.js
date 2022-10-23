const images = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif", "7.gif"]  //imagens das cartas viradas
let turneds = []; // controle das cartas que estão viradas
let plays = 0; // controle do número de jogadas

let num = prompt("Escolha uma quantidade par de cartas entre 4 e 14"); // número de cartas no jogo
while (num < 4 || num > 14 || num % 2 != 0) {
    num = prompt("Eu disse uma quantidade PAR, entre QUATRO(4) e QUARTORZE(14)")
}
makeCards(num);

// função que faz o vetor com 2 de cada imagem
function makeCards(num) {
    let cardVector = [];
    for (let i = 0; i < num / 2; i++) {
        for (let j = 0; j < 2; j++) {
            cardVector.push(images[i]);
        }
    }

    cardVector.sort(mixer);

    implementCards(cardVector);

}

// função para auxiliar a embaralhar as cartas
function mixer() {
    return Math.random() - 0.5;
}

// implementa as cartas já embaralhadas no html
function implementCards(cards) {
    const divCards = document.querySelector(".cards");
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
        divCards.innerHTML += `
            <div onclick="turnCard(this)" class="card">
            <div class="front-face face">
                <img class="parrot" src="./figs/front.png" alt="">
            </div>
            <div class="back-face face">
                <img class="image" src="./figs/${cards[i]}" alt="">
            </div>
        </div>`
    }

}

// vira a carta clicada e incrmente o número de jogadas
function turnCard(card) {
    if (card.classList.contains("turned")) {
        card.classList.remove("turned");
        turneds = [];
    }
    else {
        card.classList.add("turned");
        turneds.push(card);
    }
    plays++;

    if (turneds.length >= 2) { // verificação de 2 cartas viradas
        compareCards(turneds[0], turneds[1]);

        turneds = [];
    }

}


// compara as cartas viradas
function compareCards(card1, card2) {


    if (card1.innerHTML == card2.innerHTML) { // cartas iguais ficam viradas
        card1.onclick = "";
        card2.onclick = "";
        card1.classList.add("correct");
        card2.classList.add("correct")
        card1.classList.remove("turned");
        card2.classList.remove("turned");
    }
    else { // cartas diferentes ficam 1 seg viradas antes de voltar à posição original
        setTimeout(unflip, 1000, card1, card2);
    }

    const corrects = document.querySelectorAll(".correct"); // verificação de quantas cartas estão viradas corretamente
    if (corrects.length >= num) {
        setTimeout(finishGame, 500);
    }

}

// função para desvirar carta
function unflip(card1, card2) {
    card1.classList.remove("turned");
    card2.classList.remove("turned");
}

// finalizar o jogo com o número de jogadas
function finishGame() {
    alert(`Você ganhou em ${plays} jogadas!`);
}
