let num1 = ''
let num2 = ''
let isCleared = true // if only 0 is on current screen
const numbers = document.querySelectorAll('[data-number]')
const operators = document.querySelectorAll('[data-operator]')
const currentScreen = document.querySelector(".current")
const resultScreen = document.querySelector(".result")
currentScreen.textContent = ''

numbers.forEach((button) =>{
    button.addEventListener("click", ()=> insertNumber(button.dataset.number))
})
operators.forEach((button) =>{
    button.addEventListener("click", ()=> insertOperator(button.dataset.operator))
})

function insertNumber(number){
    if(isCleared){
        resultScreen.textContent = number
        isCleared = false
    }
    else{
        resultScreen.textContent = resultScreen.textContent + number
    }
}

function insertOperator(operator){
    resultScreen.textContent = resultScreen.textContent + " " + operator + " "
}