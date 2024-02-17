let title = document.querySelector('h1');
title.innerText = "Hora do Desafio";
let desc = document.querySelector('.texto__paragrafo');
let chancesBox = document.querySelector('span');

let valueRandom = generateRandomNumber();
let chances = 0;

function verificarChute() {
    let input = document.querySelector('.container__input').value;
    

    if(input == valueRandom) {
        desc.innerHTML = "Você acertou!";
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (input > valueRandom){
        desc.innerHTML = "Você errou! É uma número menor";
        chances++;
        chancesBox.innerHTML = chances;
        clearInput();
    } else {
        desc.innerHTML = "Você errou! É uma número maior";
        chances++;
        chancesBox.innerHTML = chances;
        clearInput();
    }
}
function clearInput() {
    input = document.querySelector('input');
    input.value = '';
}

function generateRandomNumber() {
    return parseInt(Math.random() * 10 + 1);
}

function restartGame() {
    document.getElementById('reiniciar').setAttribute('disabled', true);
    desc.innerHTML = "Escolha um número de 1 a 10";
    clearInput();
    chances = 0;
    chancesBox.innerHTML = chances;
    generateRandomNumber();
    valueRandom = generateRandomNumber();
}