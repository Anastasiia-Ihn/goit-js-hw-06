const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');//  знайшли елемент, в який треба додати li

// поелементно перебираємо або for або map і на кожній ітерації ств ел
// const elements = ingredients.map(el => {

//   const elemIngred = document.createElement('li');
//   elemIngred.classList.add('item');
//   elemIngred.textContent = el;

//   return elemIngred
// })

// ingredientsEl.append(...elements);



// Переробити викор ф-ю, для подальшого використання 
// callback з  map
const makeList = items => {
  return items.map(el => {

    const elemIngred = document.createElement('li');
    elemIngred.classList.add('item');
    elemIngred.textContent = el;

    return elemIngred;
  })
}
const elements = makeList(ingredients);

ingredientsEl.append(...elements);
