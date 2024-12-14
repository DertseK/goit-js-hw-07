const fornEl = document.querySelector('.js-login-form');
const { email, password } = fornEl.elements;
fornEl.addEventListener('submit', evt => {
  evt.preventDefault();
  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }
  const userCredential = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(userCredential);
});
