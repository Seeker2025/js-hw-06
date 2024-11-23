const formEl = document.querySelector('.login-form');
// console.dir(formEl);
formEl.addEventListener('submit', formFun);
function formFun(event) {
    event.preventDefault();
    const allBigForm = event.target;
    // console.log(event.currentTarget);
    const { email, password } = event.currentTarget.elements;
    //  console.log(email.value);
    //  console.log(password.value);
    const dataForm = {
        email: email.value,
        password: password.value,
    };
    if (email.value === '' || password.value === '') {
        alert('All fields must be filled in!'); 
    }
    allBigForm.reset();
console.log(dataForm);
}
////// well done!