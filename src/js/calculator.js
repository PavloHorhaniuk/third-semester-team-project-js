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
    if (Number(secondNumOfCalculator.value) === 0 && currentAction === '/'){
        secondNumOfCalculator.style.border = '1px solid red'
        calculatorResult.textContent = 'На нуль ділити не можна'
    }
    else {
        calculatorResult.textContent = operation[currentAction] (Number(firstNumOfCalculator.value) , Number(secondNumOfCalculator.value))
    }
})

