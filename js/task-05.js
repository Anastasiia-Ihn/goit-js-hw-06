const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input',changeName);

function changeName(event) {
    nameOutput.textContent = event.currentTarget.value;
}


// nameInput.addEventListener('focus', inputFocus);

// function inputFocus() {
//     nameOutput.textContent = '';
// }


nameInput.addEventListener('blur', inputBlur);

function inputBlur() {
    nameOutput.textContent = 'Anonymous'
}