let firstNumOfCalculator = document.querySelector('.calculator__input-first')
let operation = {
    '+' : (a , b) => a + b,
    '-' : (a , b) => a - b,
    '/' : (a , b) => a / b,
    '*' : (a , b) => a * b
}
let currentAction = ''
document.querySelectorAll('.calculator__action .calculator__btn').forEach(action => {
    action.addEventListener('click' , function() {
        currentAction = action.dataset.action
    })
});
let secondNumOfCalculator = document.querySelector('.calculator__input-second')
let calculatorResult = document.querySelector('.calculator__result')
document.querySelector('[data-action="="]').addEventListener('click' , function(){
    secondNumOfCalculator.style.border = ''
    firstNumOfCalculator.style.border = ''
    firstNumOfCalculator.placeholder = 'Введіть число'
    secondNumOfCalculator.placeholder = 'Введіть число'
    let isValidNumber = (value) =>{
        const nonValid = /^-?\d+(\.\d+)?$/;
        return nonValid.test(value);
    }
    if (firstNumOfCalculator.value.trim().length === 0){
        firstNumOfCalculator.style.border = '1px solid red'
        firstNumOfCalculator.placeholder = 'Ви нічого не ввели'
        return
    }
    else if(!isValidNumber(firstNumOfCalculator.value)){
        firstNumOfCalculator.style.border = '1px solid red'
        calculatorResult.textContent = 'Не може містити букви або символи'
        return
   }
    else if(secondNumOfCalculator.value.trim().length === 0){
        secondNumOfCalculator.style.border = '1px solid red'
        secondNumOfCalculator.placeholder = 'Ви нічого не ввели'
        return
    }
    else if(!isValidNumber(secondNumOfCalculator.value)){
        secondNumOfCalculator.style.border = '1px solid red'
        calculatorResult.textContent = 'Не може містити букви або символи'  
        return
    }
    else if (Number(secondNumOfCalculator.value) === 0 && currentAction === '/'){
        secondNumOfCalculator.style.border = '1px solid red'
        calculatorResult.textContent = 'На нуль ділити не можна'
        return
    }
    else {
        calculatorResult.textContent = operation[currentAction] (Number(firstNumOfCalculator.value) , Number(secondNumOfCalculator.value))
    }
})