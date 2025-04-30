const slider = document.querySelectorAll('[data-slider-item]')
const sliderList = document.querySelector('[data-slider]')
let currentPosition = 0
const arrowLeft = document.querySelector('.our-team__arrleft')
const arrowRight = document.querySelector('.our-team__arrright')

const slideWidth = 180

arrowRight.addEventListener('click', () => {
	currentPosition++
	if (currentPosition >= slider.length) {
		currentPosition = 0
	}
	moveSlider()
})
arrowLeft.addEventListener('click', () => {
	currentPosition--
	if (currentPosition < 0) {
		currentPosition = slider.length - 1
	}
	moveSlider()
})

function moveSlider() {
	slider.forEach(slide => {
		slide.style.transform = `translateX(-${currentPosition * slideWidth}px)`
	})
}
