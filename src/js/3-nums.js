const inputs = document.querySelectorAll('.biggest-num__input');
const resultSpan = document.querySelector('.biggest-num__span');

function updateMaxValue() {
  const values = Array.from(inputs).map(input => parseFloat(input.value));
  if (values.every(val => !isNaN(val))) {
    const max = Math.max(...values);
    resultSpan.textContent = `Найбільше число, яке ви ввели - ${max}`;
  } else {
    resultSpan.textContent = 'Найбільше число, яке ви ввели';
  }
}

inputs.forEach(input => {
  input.addEventListener('input', updateMaxValue);
});
