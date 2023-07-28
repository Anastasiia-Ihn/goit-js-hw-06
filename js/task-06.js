const validationInputEl = document.querySelector('#validation-input');

const lengthWord = validationInputEl.dataset.length;
// const lengthWord = validationInputEl.getAttribute('data-length');


validationInputEl.addEventListener('blur', lossFocus);

function lossFocus() {

    if (validationInputEl.value.length === Number(validationInputEl.dataset.length)) {
        validationInputEl.classList.add('valid');
        validationInputEl.classList.remove('invalid')
    } else {
        validationInputEl.classList.add('invalid');
        validationInputEl.classList.remove('valid')
    }
}
    
    
    //     validationInputEl.value.length === Number(validationInputEl.dataset.length) ? validationInputEl.classList.add('valid') : validationInputEl.classList.add('invalid')