const images = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif", "7.gif"]

const num = prompt("quantas cartas?")
displayCards(num);

function makeCards(num){
    let cardVector = [];
    for (let i =0; i<num/2; i++){
        for (let j=0; j<2; j++){
            cardVector.push(images[i]);
        }
    }

    console.log (cardVector);

}

function displayCards(cards){
    const divCards = document.querySelector(".cards");
    for (let i =0; i<cards/2; i++){
        for (let j=0; j<2; j++){
            divCards.innerHTML += `
            <div class="card">
            <div class="front-face face">
                <img class="parrot" src="./figs/front.png" alt="">
            </div>
            <div class="back-face face">
                <img class="image" src="./figs/${images[i]}" alt="">
            </div>
        </div>`
        }
    }

}