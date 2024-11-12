const form = document.querySelector('.form__position');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const citySelect = document.querySelector('#city');
const personalDataCheckbox = document.querySelector('#checkbox');
const submitButton = document.querySelector('.form__button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  validateForm();
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('form')) {
    form.reset();
  }
});

nameInput.addEventListener('input', (e) => {
  const inputValue = e.target.value;
  const formattedValue = inputValue.replace(/[0-9]/g, '');
  e.target.value = formattedValue;
});

phoneInput.addEventListener('input', (e) => {
  const inputValue = e.target.value;
  if (inputValue.startsWith('+')) {
    const formattedValue = inputValue.replace(/[^0-9+]/g, '').substr(0, 12);
    e.target.value = formattedValue;
  } else {
    const formattedValue = inputValue.replace(/^8/, '').replace(/[^0-9]/g, '');
    e.target.value = `+7${formattedValue.substr(0, 10)}`;
  }
});

function validateForm() {
  let isValid = true;

  if (!nameInput.value.match(/^[а-яА-Яa-zA-Z\s]+$/)) {
    nameInput.setCustomValidity('Ввод цифр недопустим');
    isValid = false;
    nameInput.classList.add('error');
    nameInput.reportValidity();
  } else {
    nameInput.setCustomValidity('');
    nameInput.classList.remove('error');
  }

  if (!phoneInput.value.match(/^\+7[0-9]+$/)) {
    phoneInput.setCustomValidity('Введите телефон в формате +7XXXXXXXXXX');
    isValid = false;
    phoneInput.classList.add('error');
    phoneInput.reportValidity();
  } else {
    phoneInput.setCustomValidity('');
    phoneInput.classList.remove('error');
  }

  if (citySelect.value === '') {
    citySelect.setCustomValidity('Выберите город');
    isValid = false;
    citySelect.classList.add('error');
    citySelect.reportValidity();
  } else {
    citySelect.setCustomValidity('');
    citySelect.classList.remove('error');
  }

  if (!personalDataCheckbox.checked) {
    personalDataCheckbox.setCustomValidity('Вы должны согласиться на обработку персональных данных');
    isValid = false;
    personalDataCheckbox.classList.add('error');
    personalDataCheckbox.reportValidity();
  } else {
    personalDataCheckbox.setCustomValidity('');
    personalDataCheckbox.classList.remove('error');
  }

  if (isValid) {
    form.submit();
    form.reset();
  }
}
