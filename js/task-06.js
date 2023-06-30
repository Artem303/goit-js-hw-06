const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', handlerBlur);
function handlerBlur() {
  if (inputEl.value.length === Number(inputEl.getAttribute('data-length'))) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
