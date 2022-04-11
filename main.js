'use strict';

let count = document.querySelector('.count');
let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains('add')) {
        count.innerHTML++;
        colorChanger();
    }
    if(e.target.classList.contains('reset')) {
        count.innerHTML = 0;
        colorChanger();
    }
    if(e.target.classList.contains('substract')) {
        count.innerHTML--;
        colorChanger();
    }
})


function colorChanger() {
    if(count.innerHTML > 0) {
        count.style.color = 'rgb(28, 218, 43)';
    } else if(count.innerHTML < 0) {
        count.style.color = 'rgb(255, 94, 0)';
    } else {
        count.style.color = '#fff';
    }
}