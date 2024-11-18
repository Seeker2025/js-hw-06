const refInputBlur = document.getElementById('validation-input');
console.log(refInputBlur);

refInputBlur.addEventListener('blur', inputBlurEvent);

function inputBlurEvent(event) {
//  if(event.target.value.length===+event.target.getAttribute('data-length')) {
//      console.log('whoa!');
//      event.target.classList.add('valid');
//     }
//  else{
//     event.target.classList.add('invalid');
//     }
event.target.value.length === +event.target.getAttribute('data-length')?   
event.target.classList.add('valid') : event.target.classList.add('invalid')
}

// console.log(refInputBlur.getAttribute('data-length'));
// console.log(typeof (refInputBlur.getAttribute('data-length')));
// const a = Number(refInputBlur.getAttribute('data-length'));
// console.log(typeof (a));