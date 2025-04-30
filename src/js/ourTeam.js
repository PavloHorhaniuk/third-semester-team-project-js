const sliderDataName = 'data-slider'
const slider = document.querySelectorAll(`[${sliderDataName}-item]`)
const sliderList = document.querySelector(`[${sliderDataName}]`)

const pagination = document.querySelector(`[${sliderDataName}-pagination]`)

const arrowLeft = document.querySelector('.our-team__arrleft')
const arrowRight = document.querySelector('.our-team__arrright')

const slideWidth = 180
const paginationBtnElement = `<li class="our-team__pagination-item"><button data-slider-pagination-btn class=""></button></li>`

let currentPosition = 0

for (let i = 0; i < slider.length; i++) {
	pagination.insertAdjacentHTML('beforeend', paginationBtnElement)
}

const paginationBtns = document.querySelectorAll(
	`[${sliderDataName}-pagination-btn]`
)

paginationBtns.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		currentPosition = index
		moveSlider()
		updatePagination()
	})
})

setInterval(() => {
	currentPosition++
	if (currentPosition >= slider.length) {
		currentPosition = 0
	}
	moveSlider()
	updatePagination()
}, 10000)

arrowRight.addEventListener('click', () => {
	currentPosition++
	if (currentPosition >= slider.length) {
		currentPosition = 0
	}
	moveSlider()
	updatePagination()
})

arrowLeft.addEventListener('click', () => {
	currentPosition--
	if (currentPosition < 0) {
		currentPosition = slider.length - 1
	}
	moveSlider()
	updatePagination()
})

function moveSlider() {
	slider.forEach(slide => {
		slide.style.transform = `translateX(-${currentPosition * slideWidth}px)`
	})
}

function updatePagination() {
	paginationBtns.forEach((paginationBtn, i) => {
		if (i === currentPosition) {
			paginationBtn.classList.add('active')
		} else {
			paginationBtn.classList.remove('active')
		}
	})
}

updatePagination()
moveSlider()
