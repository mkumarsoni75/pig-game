'use strict';

//Selecting elements 
const scoreZero = document.querySelector('#score--0');
const scoreOne = document.getElementById('score--1');
const curr0El = document.querySelector('#current--0');
const curr1El = document.querySelector('#current--1');

console.log(curr0El);
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const scores = [0,0];

let currentScore = 0;
let activePlayer = 0;
let wonTimes =0;



scoreOne.textContent = 0;
scoreZero.textContent = 0;
diceEl.classList.add('hidden');

// rolling dice functionality
btnRoll.addEventListener('click',function(){
// generating a random dice roll

const dice = Math.trunc(Math.random()*6) + 1;
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;
if(dice !== 1){
    currentScore = Number(
        document.querySelector(`#current--${activePlayer}`).textContent) + dice;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    if(currentScore >= 50){
        document.querySelector(`#score--${activePlayer}`).textContent = Number(document.querySelector(`#score--${activePlayer}`).textContent) + 1;
        document.querySelector(`#current--${activePlayer}`).textContent =0;
    }


}else{
    document.querySelector(`#current--${activePlayer}`).textContent =0;
    
    if(activePlayer === 0){
        document.querySelector(`#score--${activePlayer}`).textContent = Number(document.querySelector(`#score--${activePlayer}`).textContent) + currentScore;

        document.querySelector(`.player--0`).classList.remove('player--active');
        document.querySelector(`.player--1`).classList.add('player--active');
        activePlayer = 1;

    }else{
        document.querySelector(`.player--1`).classList.remove('player--active');
        document.querySelector(`.player--0`).classList.add('player--active');
        document.querySelector(`#score--${activePlayer}`).textContent = Number(document.querySelector(`#score--${activePlayer}`).textContent) + currentScore;
        activePlayer = 0;
    }
    currentScore =0;
   
}});
btnHold.addEventListener('click', function(){
    if(activePlayer === 0){
        document.querySelector(`.player--0`).classList.remove('player--active');
        document.querySelector(`.player--1`).classList.add('player--active');
        activePlayer = 1;

    }else{
        document.querySelector(`.player--1`).classList.remove('player--active');
        document.querySelector(`.player--0`).classList.add('player--active');
        activePlayer = 0;
    }



});
btnNew.addEventListener('click',function(){
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`#score--0`).textContent = 0;
    document.querySelector(`#score--1`).textContent = 0;
    document.querySelector(`#current--0`).textContent =0;
    document.querySelector(`#current--1`).textContent =0;
    diceEl.classList.add('hidden');




});