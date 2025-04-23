let firstNumOfCalculator = document.querySelector('.calculator__input-first')
let operation = {
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	'/': (a, b) => a / b,
	'*': (a, b) => a * b
}
firstNumOfCalculator.addEventListener('input', function () {
	firstNumOfCalculator.style.color = 'black'
})
let currentAction = ''
document
	.querySelectorAll('.calculator__action .calculator__btn')
	.forEach(action => {
		action.addEventListener('click', function () {
			document
				.querySelectorAll('.calculator__action .calculator__btn')
				.forEach(btn => {
					btn.classList.remove('clicked')
				})
			currentAction = action.dataset.action
			action.classList.add('clicked')
		})
	})
let secondNumOfCalculator = document.querySelector('.calculator__input-second')
secondNumOfCalculator.addEventListener('input', function () {
	secondNumOfCalculator.style.color = 'black'
})
let calculatorResult = document.querySelector('.calculator__result')
document
	.querySelector('[data-action="="]')
	.addEventListener('click', function () {
		secondNumOfCalculator.style.border = ''
		firstNumOfCalculator.style.border = ''
		firstNumOfCalculator.placeholder = 'Введіть число'
		secondNumOfCalculator.placeholder = 'Введіть число'
		firstNumOfCalculator.style.fontSize = '12px'
		secondNumOfCalculator.style.fontSize = '12px'
		let isValidNumber = value => {
			const nonValid = /^-?\d+(\.\d+)?$/
			return nonValid.test(value)
		}
		if (firstNumOfCalculator.value.trim().length === 0) {
			firstNumOfCalculator.style.border = '1px solid red'
			firstNumOfCalculator.style.fontSize = '9px'
			firstNumOfCalculator.placeholder = 'Ви нічого не ввели'
			return
		} else if (!isValidNumber(firstNumOfCalculator.value)) {
			firstNumOfCalculator.style.border = '1px solid red'
			calculatorResult.textContent = 'Не може містити букви або символи'
			return
		} else if (secondNumOfCalculator.value.trim().length === 0) {
			secondNumOfCalculator.style.border = '1px solid red'
			secondNumOfCalculator.style.fontSize = '9px'
			secondNumOfCalculator.placeholder = 'Ви нічого не ввели'
			return
		} else if (!isValidNumber(secondNumOfCalculator.value)) {
			secondNumOfCalculator.style.border = '1px solid red'
			calculatorResult.textContent = 'Не може містити букви або символи'
			return
		} else if (
			Number(secondNumOfCalculator.value) === 0 &&
			currentAction === '/'
		) {
			secondNumOfCalculator.style.border = '1px solid red'
			calculatorResult.textContent = 'На нуль ділити не можна'
			return
		} else {
			calculatorResult.textContent = operation[currentAction](
				Number(firstNumOfCalculator.value),
				Number(secondNumOfCalculator.value),
				(calculatorResult.style.color = 'black')
			)
		}
	})
