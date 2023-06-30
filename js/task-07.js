const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('change', handleChageSize);
function handleChageSize() {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
