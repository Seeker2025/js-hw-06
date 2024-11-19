const refFontSizeControl = document.getElementById('font-size-control');
const refSpanText = document.getElementById('text');
console.log(refFontSizeControl);
console.log(refSpanText.style.fontSize);

refFontSizeControl.addEventListener('input', sliderFun);

function sliderFun(event) {
    console.log('value', event.target.value);
    refSpanText.style.fontSize = `${event.target.value}px`;
}




