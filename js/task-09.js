////// The function generates a random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bigBody = document.querySelector('body.body');
console.log(bigBody);
const butChangeColor = document.querySelector('button.change-color');
console.log(butChangeColor);
butChangeColor.addEventListener('click', addColor);
const refSpan = document.querySelector('span.color');
console.log(refSpan);
function addColor(event) {
  const colorFun = getRandomHexColor();
  bigBody.style.backgroundColor = colorFun;
  refSpan.textContent = colorFun;
}
// bigBody.style.backgroundColor = 'blue';
//console.log(getRandomHexColor());

//////well done!

