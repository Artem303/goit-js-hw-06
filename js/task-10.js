function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesCreateEl = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);

const divArr = [];
const amount = Number(inputEl.value);

function createBoxes(amount) {
  // divArr.map((element, amount) => console.log(amount));
  console.log(amount);
}

// currentTarget.elements.
