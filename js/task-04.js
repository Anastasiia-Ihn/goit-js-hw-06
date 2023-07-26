const counterEl = document.querySelector('#counter')
const allElCounter = counterEl.children


const decrementBtn = allElCounter[0];
let valueEl = allElCounter[1];
const incrementBtn = allElCounter[2]


let counterValue = 0;


decrementBtn.addEventListener('click', () => {
   
    counterValue -= 1;
    valueEl.textContent = counterValue;
})

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
})
