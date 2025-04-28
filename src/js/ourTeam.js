const slider = document.querySelector('.our-team__list');
let currentLeft = 0;

const arrowLeft = document.querySelector('.our-team__arrleft');
const arrowRight = document.querySelector('.our-team__arrright');

const step = 150;

arrowRight.addEventListener('click', () => {
  currentLeft += step;
  slider.style.left = `${currentLeft}px`;
});
arrowLeft.addEventListener('click', () => {
  currentLeft -= step;
  slider.style.left = `${currentLeft}px`;
});