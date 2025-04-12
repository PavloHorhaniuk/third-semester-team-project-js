const modalform = document.querySelector('.modal__form')
const userName = document.querySelector('#userName')

modalform.addEventListener('submit', e => {
	e.preventDefault()
	const name = e.target.elements.name.value
	userName.textContent = name
})
