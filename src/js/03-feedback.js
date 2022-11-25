
import throttle from "lodash.throttle";

const refs = {
  formEl: document.querySelector('.feedback-form'),
  }
const STORAGE_KEY = 'feedback-form-state';
// зберігаємо імейл та повідомлення в обєкт
let formData = {};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onFormInput, 500));

populateTextarea();

function onFormInput(e){
  // отримуємо значення
const message = e.target.value;
  // зберігаємо його в сховище    
  localStorage.setItem(STORAGE_KEY, message )
}

function onFormSubmit(e){
  // Х поведінку по замовчуванню
e.preventDefault();
// Забираємо повідомлення із сховища і чистимо форму, reset() для очистки форм
e.currentTarget.reset();
const { email, message, } = e.currentTarget.elements;
console.log(e.currentTarget.element);
if( refs.emailEl.value === '' || refs.textareaEl.value === ''){
   alert(`Заповніть всі поля`);
   return;
}
  localStorage.removeItem(STORAGE_KEY); 
 // Форма відправляється при заповнених 2-х полях форми
 console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

function populateTextarea(){
  // при перезагрузці форми зберігається повідомлення, якщо воно не було відправлене
const savadMessage = localStorage.getItem(STORAGE_KEY);
  // якщо вже є відгук, то його записуємо в localStorage
if (savadMessage){
   refs.textareaEl.value = savadMessage;
}
}

function onFormOrder(e){
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  
  
}
