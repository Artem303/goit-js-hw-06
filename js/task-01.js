const elemOfCategories = document.querySelectorAll('.item');
console.log('Number of categories: ', elemOfCategories.length);

elemOfCategories.forEach((elem, index) => {
  const titleEl = elem.querySelector('h2');
  const itemEl = elem.querySelectorAll('li');
  console.log('Category:', titleEl.textContent);
  console.log('Elements: ', itemEl.length);
});
