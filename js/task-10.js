////// Random color function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refBoxes = document.getElementById('boxes');
// console.log(refBoxes);
const butCreate = document.querySelector('button.butCreate');
// console.log(butCreate);
const butDestroy = document.querySelector('button.butDestroy');
// console.log(butDestroy);
const inNumber = document.querySelector('input.inNumber');
// console.log(inNumber);

let square = 30;
let amaunt = 0;

function boxOneFun() {
const boxOne = document.createElement('div');
boxOne.classList.add('boxOne');
boxOne.style.width = `${square}px`;
boxOne.style.height = `${square}px`;
boxOne.style.background = getRandomHexColor();
refBoxes.append(boxOne);
}

function toDestroy() {
  refBoxes.innerHTML = '';
}

butCreate.addEventListener('click', createBoxes);
butDestroy.addEventListener('click', toDestroy);
inNumber.addEventListener('input', toInput);

function toInput(event) {
  console.log(event.currentTarget.value);
  amaunt = event.currentTarget.value;
}

function createBoxes() {
      for (let i = 0; i < amaunt; i += 1) {
        boxOneFun();
        square += 10;
}
        square = 30;
}









