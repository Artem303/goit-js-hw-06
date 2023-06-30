const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', event => {
  if (nameInputEl.value === '') {
    nameOutputEl.textContent = 'Anonymous';
  } else nameOutputEl.textContent = event.currentTarget.value;
});
