import throttle from "lodash.throttle";

const refs = {
  formEl: document.querySelector('.feedback-form'),
  }
const STORAGE_KEY = 'feedback-form-state';

// зберігаємо імейл та повідомлення в обєкт
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
onPopulateForm()
refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
// отримуємо значення із форми
formData[e.target.name] = e.target.value;
// записуємо значення в localStorage
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onPopulateForm(){
  const savedInputForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // якщо вже є відгук, то його записуємо в localStorage
  
  if(savedInputForm){
    savedInputForm.email? refs.formEl.email.value = savedInputForm.email: refs.formEl.email.value= '';
    savedInputForm.message? refs.formEl.message.value = savedInputForm.message: refs.formEl.message.value;
  } 
}

function onFormSubmit(e){
  // забороняється поведінка по замовчуванню 
  e.preventDefault();

  const { email, message} = e.currentTarget.elements;
if(email.value === '' || message.value === ''){
alert( `Заповніть, будь ласка, всі поля!`)
}
// чистимо форму
e.currentTarget.reset();
console.log(formData);
formData = {};
localStorage.removeItem(STORAGE_KEY);
}