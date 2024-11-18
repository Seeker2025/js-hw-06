////counter
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

const counterValue = document.querySelector('#value');
console.log(btnDecrement);
console.log(btnIncrement);

let num = 0;

let addNum = function (event) {
    num += 1;
    return counterValue.textContent = num;
}

let subNum = function (event) {
    num -= 1;
    return counterValue.textContent = num;
}
btnIncrement.addEventListener('click', addNum);
btnDecrement.addEventListener('click', subNum);




