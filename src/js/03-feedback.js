
import throttle from "lodash.throttle";

const refs = {
  formEl: document.querySelector('.feedback-form'),
  textareaEl: document.querySelector('.feedback-form textarea'),
  emailEl: document.querySelector('.feedback-form input'),
}
const STORAGE_KEY = 'feedback-form-state';
// зберігаємо імейл та повідомлення в обєкт
let formData = {};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e){
  // отримуємо значення
  formData[e.target.name] = e.target.value;
  console.log(formData);
  // зберігаємо його в сховище    JSON.stringify(formData)
  localStorage.setItem(STORAGE_KEY, formData )
}

 function onFormSubmit(e){
  // Х поведінку по замовчуванню
e.preventDefault();
// Забираємо повідомлення із сховища і чистимо форму, reset() для очистки форм
e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY); 
 // Форма відправляється при заповнених 2-х полях форми
   console.log(localStorage.getItem(JSON.parse(formData)));
 
}


function populateTextarea(){
  // при перезагрузці форми зберігається повідомлення, якщо воно не було відправлене
const savadMessage = localStorage.getItem(STORAGE_KEY);
  // якщо вже є відгук, то його записуємо в localStorage
if (savadMessage){
   refs.textareaEl.value = savadMessage;
}
}
populateTextarea();
