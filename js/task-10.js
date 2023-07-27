function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const elementsControls = document.querySelector('#controls')
const listElementsControls = elementsControls.children

listElementsControls[1].addEventListener('click', createBoxes)
listElementsControls[2].addEventListener('click', destroyBoxes)

const boxesEl = document.querySelector('#boxes')




const allBoxes = [];

function createBoxes(amount) {

// передаємо значення введеного в інпут
  amount = listElementsControls[0].value;
  if (amount > 0 && amount <= 100) {
    
//  Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

    for (let i = 0; i < amount; i += 1) {
      // ств квадрат
      const divElem = document.createElement('div');
      divElem.style.width = 30 + (10 * i) + 'px';
      divElem.style.height = 30 + (10 * i) + 'px';
      divElem.style.backgroundColor = getRandomHexColor();
      boxesEl.append(divElem)
    }
  }

}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}


