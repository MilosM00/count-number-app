"use strict";


const buttonIncrease = document.querySelector(`.button-increase`);
const buttonDecrease = document.querySelector(`.button-decrease`);
const buttonReset = document.querySelector(`.button-reset`);
const displayNumber = document.querySelector(`.display-number`);


let x = 0;

buttonIncrease.addEventListener(`click`, () =>{
    x++;
    displayNumber.textContent = x;
});

buttonDecrease.addEventListener(`click`, () =>{
    x--;
    displayNumber.textContent = x;
});

buttonReset.addEventListener(`click`, () =>{
    x = 0;
    displayNumber.textContent = x;
});