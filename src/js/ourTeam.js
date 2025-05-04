import { students } from '../constants/students.js'

const sliderDataName = 'data-slider'
const sliderList = document.querySelector(`[${sliderDataName}]`)

sliderList.innerHTML = students
	.map(student => {
		return `
		<li class="our-team__item" data-slider-item>
			<img
				class="our-team__image"
				src="${student.avatar}"
				alt="зображення"
				loading="lazy"
			/>
			<p class="our-team__name">${student.name}</p>
			<p class="our-team__work">${student.info}</p>
		</li>
	`
	})
	.join('')

const slider = document.querySelectorAll(`[${sliderDataName}-item]`)
const pagination = document.querySelector(`[${sliderDataName}-pagination]`)

const arrowLeft = document.querySelector('.our-team__arrleft')
const arrowRight = document.querySelector('.our-team__arrright')

const paginationBtnElement = `<li class="our-team__pagination-item"><button data-slider-pagination-btn class=""></button></li>`

const slideWidth = 290 + 30
let currentPosition = 0

let autoSlideTimer = null

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
		startAutoSlide()
	})
})

arrowRight.addEventListener('click', () => {
	currentPosition++
	if (currentPosition >= slider.length) {
		currentPosition = 0
	}
	moveSlider()
	updatePagination()
	startAutoSlide()
})

arrowLeft.addEventListener('click', () => {
	currentPosition--
	if (currentPosition < 0) {
		currentPosition = slider.length - 1
	}
	moveSlider()
	updatePagination()
	startAutoSlide()
})

function startAutoSlide() {
	clearInterval(autoSlideTimer)
	autoSlideTimer = setInterval(() => {
		currentPosition++
		if (currentPosition >= slider.length) {
			currentPosition = 0
		}
		moveSlider()
		updatePagination()
	}, 10000)
}

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
startAutoSlide()
