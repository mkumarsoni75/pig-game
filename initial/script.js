'use strict';

//Selecting elements 
const scoreZero = document.querySelector('#score--0');
const scoreOne = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');



scoreOne.textContent = 0;
scoreZero.textContent = 0;
diceEl.classList.add('hidden');

// rolling dice functionality
btnRoll.addEventListener('click',function(){
// generating a random dice roll

const dice = Math.trunc(Math.random()*6) + 1;
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;



});
