const slider = document.querySelectorAll('.our-team__list li');
const sliderList = document.querySelector(".our-team__list");
let currentPosition = 0;
const arrowLeft = document.querySelector('.our-team__arrleft');
const arrowRight = document.querySelector('.our-team__arrright');

const slide = 150;

arrowRight.addEventListener( "click",()=>{
  currentPosition ++;
  if (currentPosition >= slider.length){
    currentPosition = 0;
  }  
  moveSlider();
});
arrowLeft.addEventListener( "click",()=>{
  currentPosition --;
  if (currentPosition < 0){
    currentPosition = slider.length -1;
  }
  moveSlider();
});
function moveSlider(){
  sliderList.style.left = `-${currentPosition * slide}px`;
}