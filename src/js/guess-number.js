const form = document.getElementById('guessNumberForm')
const input = document.getElementById('guessNumberInput')
const text = document.getElementById('guessNumberText')

form.addEventListener('submit', function (event) {
	event.preventDefault()

	const value = input.value.trim()

	if (value === '') {
		text.textContent = 'Поле не може бути порожнім.'
		text.style.color = '#f18511'
		return
	}

	//! тут застосовується перевірка за допомогою регулярного виразу (\s це символи який означає будь який пробіл)
	if (/\s/.test(value)) {
		text.textContent = 'Число не може містити пробіли.'
		text.style.color = '#f18511'
		return
	}

	if (value != Number(value)) {
		text.textContent = 'Введіть лише числа.'
		text.style.color = '#f18511'
		return
	}

	const userNumber = Number(value)

	if (userNumber < 1 || userNumber > 10) {
		text.textContent = 'Введіть число від 1 до 10.'
		text.style.color = '#f18511'
		return
	}

	const randomNumber = Math.floor(Math.random() * 10) + 1

	if (userNumber === randomNumber) {
		text.textContent = `Вітаю, ви вгадали число!  ${randomNumber}`
		text.style.color = '#039900'
	} else {
		text.textContent = `Ви програли, комп’ютер загадав  ${randomNumber}`
		text.style.color = '#900'
	}
})
