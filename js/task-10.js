function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesCreateEl = document.querySelector('#boxes');

let amount = '';

btnCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = inputEl.value;

  boxesCreateEl.innerHTML = '';

  for (let i = 0; i < Number(amount); i += 1) {
    let size = `${30 + i * 10}px`;
    const createDiv = document.createElement('div');
    createDiv.style.width = size;
    createDiv.style.height = size;
    createDiv.style.backgroundColor = getRandomHexColor();

    boxesCreateEl.append(createDiv);
  }
}

btnDestroy.addEventListener('click', () => (boxesCreateEl.innerHTML = ''));
