const images = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif", "7.gif"]

let num = prompt("Escolha uma quantidade par de cartas entre 4 e 14");

while (num<4 || num> 14 || num%2 != 0){
    num = prompt("Eu disse uma quantidade PAR, entre QUATRO(4) e QUARTORZE(14)")
}



makeCards(num);

function makeCards(num){
    let cardVector = [];
    for (let i =0; i<num/2; i++){
        for (let j=0; j<2; j++){
            cardVector.push(images[i]);
        }
    }

    cardVector.sort(mixer);

    displayCards(cardVector);
    
}

function displayCards(cards){
    const divCards = document.querySelector(".cards");
    console.log(cards);
    for (let i =0; i<cards.length ; i++){
            divCards.innerHTML += `
            <div class="card">
            <div class="front-face face">
                <img class="parrot" src="./figs/front.png" alt="">
            </div>
            <div class="back-face face">
                <img class="image" src="./figs/${cards[i]}" alt="">
            </div>
        </div>`
    }

}


// função para auxiliar a embaralhar as cartas
function mixer() { 
	return Math.random() - 0.5; 
}