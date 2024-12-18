const formEl = document.querySelector(`.js-login-form`);
formEl.addEventListener(`submit`, event => {
  event.preventDefault();
  const formData = {
    [formEl.elements.email.name]: formEl.elements.email.value.trim(),
    [formEl.elements.password.name]: formEl.elements.password.value.trim(),
  };
  if (formEl.elements.email.value === `` || formEl.elements.password.value === ``) {
    alert(`All form fields must be filled in`);
    return;
  }
  console.log(formData);
  formEl.reset();
});
