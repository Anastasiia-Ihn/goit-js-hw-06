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

let size = 20;

function createBoxes(amount) {

  // передаємо значення введеного в інпут
  amount = Number(listElementsControls[0].value);
  if (amount > 0 && amount <= 100) {

    //  Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i += 1) {
      // ств квадрат
      const divElem = document.createElement('div');

      size += 10
      divElem.style.width = `${size}px`;
      divElem.style.height = `${size}px`;
      divElem.style.backgroundColor = getRandomHexColor();
      fragment.append(divElem)      // всі div-и закинути в один блок

    }
    listElementsControls[0].value = 0;
    boxesEl.append(fragment)        // і цей блок вже закинути в код HTML

  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  listElementsControls[0].value = 0;
}


