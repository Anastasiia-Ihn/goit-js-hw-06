const images = [
  
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// ==================================================

// знаходимо обєкт в який додати розмітку
const galleryEl = document.querySelector('.gallery');

// ========================================================
// ств шаблон-функцію за доп шаблонних рядків

const makeCardImg = ({ url, alt }) =>
  `<li class = 'imgListStyle'><img class ='imgCardStyle'src="${url}" alt="${alt}"></li>`


const elements = images.map(makeCardImg).join('');
console.log(elements);
galleryEl.insertAdjacentHTML("afterbegin", elements)

console.log(elements);


// ============================================================
// шаблон-функція для 1 карточки
// 
// const makeCardImg = ({ url, alt }) => {
  
//    // ств li i class
//   const itemsEl = document.createElement('li');
//   itemsEl.classList.add('items')
  
// // ств img і атрибути
// const itemsImgEl = document.createElement('img');
// itemsImgEl.classList.add('imgEl');
// itemsImgEl.src = url;
//     itemsImgEl.alt = alt;
//     itemsImgEl.width = 320;
// // закинули img в li і потім повертаємо 1 el
//   itemsEl.append(itemsImgEl)
//       return itemsEl

// }

// const elements = images.map(makeCardImg);
// console.log(elements);
// galleryEl.append(...elements)



// =====================================================
// // ств ф-ю для повторного використання(це закидуємо в код цілим масивом)
// const createImgList = imgs => {
// // map для перебору масиву
//   return imgs.map(element => {
//     // ств li i class
// const itemsEl = document.createElement('li');
// itemsEl.classList.add('items')
// // ств img і атрибути
// const itemsImgEl = document.createElement('img');
// itemsImgEl.classList.add('imgEl');
// itemsImgEl.src = element.url;
//     itemsImgEl.alt = element.alt;
//     itemsImgEl.width = 320;
// // закинули img в li і потім повертаємо 
//     itemsEl.append(itemsImgEl)
//     return itemsEl
    
//   })

// }
// // cтв масив li
// const elements = createImgList(images);
// // закидуємо в розмітку з розпиленням, бо масив
// galleryEl.append(...elements)


