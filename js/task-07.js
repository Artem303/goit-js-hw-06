const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', handleChangeSize);
function handleChangeSize() {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
