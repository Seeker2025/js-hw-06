const refInput = document.getElementById('name-input');
const refSpanAnonymous = document.getElementById('name-output');
console.log(refInput);
console.log(refSpanAnonymous);
refInput.addEventListener('input', changeTextInSpan);

function changeTextInSpan(event) {
    refSpanAnonymous.textContent = event.currentTarget.value;
    if (event.currentTarget.value === ' ') {
        refSpanAnonymous.textContent = 'Anonymous';
}
}
