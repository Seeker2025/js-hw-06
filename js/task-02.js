const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const refListTomat = document.querySelector('#ingredients');

// const arr = ingredients.map((itm) => {
//   // console.log(itm);
//   const el = document.createElement('li');
//   el.classList.add('item');
//   el.textContent = itm;
//   return refListTomat.appendChild(el);
//  });
// console.log(refListTomat);

/////vertion 02
const arr = ingredients.map((itm) => {
  return `<li>${ itm }</li>`;
});
console.log(refListTomat);
const str = arr.join('');
// console.log(str);
// console.log(typeof (str));
refListTomat.innerHTML = str;
console.log(refListTomat);


