const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const products = document.querySelector('#ingredients');

const markup = ingredients.map(elem => {
  const product = document.createElement('li');
  product.classList.add('item');
  product.textContent = elem;
  return product;
});
products.append(...markup);
