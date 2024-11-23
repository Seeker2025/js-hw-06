// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const refBoxes = document.getElementById('boxes');
console.log(refBoxes);
const  square = 30;
const toAdd = 10;
// function createBox(num) {
  
//   const boxOne = document.createElement('div');
// boxOne.classList.add('boxOne');
// boxOne.style.width = `${square+num}px`;
// boxOne.style.height = `${square+num}px`;
// boxOne.style.background = "red";

// refBoxes.append(boxOne);
// }


let num03 = 10;
function toAdding() {
  num03 += 10;
  console.log(num03);
}

toAdding()
toAdding()
toAdding()


