const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const refGallery = document.querySelector('ul.gallery');
// console.log(refGallery);

const gallBlock = images.map((itm) => {
  // console.log(itm.url);
  
  return `<li><img class='gallItem' src=${itm.url}></li>`;
  
});
const strGallery = gallBlock.join(' ');
console.log(typeof(strGallery));
console.log(strGallery);

refGallery.insertAdjacentHTML('afterbegin', strGallery);
console.log(strGallery);


