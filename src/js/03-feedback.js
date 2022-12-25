import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');


form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

dataFromLocalStorage();

function onFormData() {
    const formData = {email: email.value, message: message.value};
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function onSubmitForm(e) {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(data);
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};


