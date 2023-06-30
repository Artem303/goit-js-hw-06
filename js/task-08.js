const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  if (formElements.email.value === '' || formElements.password.value === '') {
    alert('Є не заповнені поля!');
  } else {
    const formObj = {};
    formObj.email = formElements.email.value;
    formObj.password = formElements.password.value;
    console.log(formObj);
    formEl.reset();
  }
}
