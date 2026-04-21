// 5*. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) 
// "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - 
// будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if). 
// То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, 
// другая - рендерить эти карточки (принимая массив аргументом)

import { products } from './products.js';

let numberCards = prompt('Сколько продуктов отобразить?', 'Введите число от 1 до 5');
if (numberCards >= 1 && numberCards <= 5) {
  numberCards = +numberCards;
} else {
  alert('Пожалуйста, введите число от 1 до 5. По-умолчанию откроется 5 карточек.');
  numberCards = 5;
};

const productCardTemplate = document.querySelector('#product-card-template');
const productCardsList = document.querySelector('.product-card-wrapper');

products.slice(0, numberCards).forEach(product => {
  const productClone = productCardTemplate.content.cloneNode(true);
  const ingredientList = productClone.querySelector('.ingredients-block__list');
  product.productIngredients.forEach(ingredient => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add('ingredients-block__items');
    ingredientList.appendChild(ingredientItem);
  });
  productClone.querySelector('.product-card__image').src = product.productImage;
  productClone.querySelector('.product-card__image').alt = product.productTitle;
  productClone.querySelector('.product-card__type').textContent = product.productType;
  productClone.querySelector('.product-card__title').textContent = product.productTitle;
  productClone.querySelector('.product-card__description').textContent = product.productDescription;
  productClone.querySelector('.price-cost').textContent = `${product.productCost.toLocaleString('ru-RU')} ₽`;
  productCardsList.appendChild(productClone);
});

// 4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, 
// а значением - его описание

const productCardsPrewiev = products.reduce((acc, product) => {
  const { productTitle, productDescription } = product;
  return { ...acc, [productTitle]: productDescription };
}, {});
