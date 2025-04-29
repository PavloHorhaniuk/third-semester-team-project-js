import { closeModal, openModal } from './modal.js'

const modalform = document.querySelector('.header__modal-form')
const userName = document.querySelector('#userName')
const logOutBtn = document.querySelector('#logout')

openModal('header')

let name

const setLocalStorage = (name, value) => {
	localStorage.setItem(`${name}`, value)
}

if (localStorage.getItem('headerName')) {
	closeModal('header')
	name = localStorage.getItem('headerName')
	userName.textContent = name
}

modalform.addEventListener('submit', e => {
	if (
		document.activeElement.tagName === 'INPUT' ||
		document.activeElement.tagName === 'TEXTAREA'
	) {
		return
	}

	e.preventDefault()
	closeModal('header')
	name = e.target.elements.headerName.value
	userName.textContent = name
	setLocalStorage('headerName', name)
})

const logout = () => {
	userName.textContent = 'User'
	setLocalStorage('headerName', '')
}

logOutBtn.addEventListener('click', logout)
