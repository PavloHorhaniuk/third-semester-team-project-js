const openModalButton = document.querySelector('[data-modal-open]')
const closeModalButton = document.querySelector('[data-modal-close]')
const modalBackdrop = document.querySelector('[data-modal]')

openModalButton.addEventListener('click', () => {
	modalBackdrop.classList.remove('is-hidden')
	document.body.classList.add('no-scroll')
})

closeModalButton.addEventListener('click', closeModal)

modalBackdrop.addEventListener('click', e => {
	if (e.target === modalBackdrop) {
		closeModal()
	}
})

document.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		closeModal()
	}
})

function closeModal() {
	modalBackdrop.classList.add('is-hidden')
	document.body.classList.remove('no-scroll')
}
