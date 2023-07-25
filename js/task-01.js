const categoriesEl = document.querySelector('#categories')

const categoriesElChild = categoriesEl.children
// кількість категорії
const quantityCategories = categoriesElChild.length
console.log(`Number of categories: ${quantityCategories}`);


[...categoriesElChild].forEach((element) => {
// назва категорії
    let elementName = element.firstElementChild.textContent;

    // список
    let elementList = element.lastElementChild;
//   кількість в списку
    const quantityElemList = elementList.children.length
  
	console.log(`Category: ${elementName}`);
  console.log(`Elements: ${quantityElemList}`);

});


