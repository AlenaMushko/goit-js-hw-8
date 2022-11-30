const refs = {
  formEl: document.querySelector('.feedback-form'),
};

refs.formEl.addEventListener('input', onFormElInput);
refs.formEl.addEventListener('submit', onFormElSubmit);

onPopulateForm();
let formData = { ...JSON.parse(localStorage.getItem('formData'))};
// let formData = JSON.parse(localStorage.getItem('formData')) || {};

function onFormElInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem('formData', JSON.stringify(formData));
}

function onFormElSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem('formData');
  hello(formData);
  formData = {};
}

function onPopulateForm() {
  let parseFormData = JSON.parse(localStorage.getItem('formData'));
  const { name, address } = refs.formEl.elements;
  if (parseFormData ) {
    name.value = parseFormData.name || '';
    address.value = parseFormData.address || '';
  }
}

function hello({ name, address }) {
  console.log(`Ваші данні прийняті: ${name} та адреса ${address || 'введфть данні'}`);
}

// function user(name, callback) {
//   console.log(name);
//   console.log(callback);
//   if (name) {
//     callback(name);
//   }
// }
