////task 01

////vertion 01
const refItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${ refItems.length }`);
 
// let num = 0;
// refItems.forEach(itm => num = num + 1);
// console.log(`Number of categories: ${ num }`);

// refItems.forEach(itm => {
//     // console.log(itm);
//     console.log(`Category: ${ itm.querySelector('h2').textContent }`);
//     itm.querySelectorAll('ul').forEach((ex) => {
//         console.log(`Elements: ${ex.querySelectorAll('li').length}`)
//     });
// })

/////vertion 02

let num02 = 0;
refItems.forEach(it => {
    num02 += 1;
console.log(`Category: ${it.firstElementChild.textContent}`);
console.log(`Elements: ${it.lastElementChild.querySelectorAll('li').length}`);
 });
console.log(num02);
