const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input',changeName);

function changeName(event) {
  nameOutput.textContent = "Anonymous";
  console.log(event.currentTarget.value);
  if (event.currentTarget.value.trim() !== "") {
    nameOutput.textContent = event.currentTarget.value;
    
  }
}
