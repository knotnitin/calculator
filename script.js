let num1 = ""
let num2 = ""
let currentOperator = null
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
    // Adds number to screen
    if(isCleared){
        resultScreen.textContent = number
        isCleared = false
    }
    else{
        resultScreen.textContent = resultScreen.textContent + number
    }
}

function containsSpecialCharacters(str) {
    // Checks if an operator is already in the text
    const pattern = /[÷x+\-]/;
    return pattern.test(str);
  }
  

function insertOperator(operator){
    // Adds operator to screen and updates operator
    if(containsSpecialCharacters(resultScreen.textContent)){

    }
    else{
        currentOperator = operator
        resultScreen.textContent = resultScreen.textContent + operator
    }
}

function operate(num1, num2, operator){
    // Takes in operator and returns output
    if (operator == "÷"){
        if(num2 == 0){
            return alert("Don't divide by zero!")
        }
        return num1 / num2
    }
    else if(operator == "x"){
        return num1 * num2
    }
    else if(operator == "-"){
        return num1 - num2
    }
    else if(operator == "+"){
        return parseInt(num1) + parseInt(num2)
    }
    else{
        console.log(`Error: Operator ${operator}, Num1${num1}, Num2${num2}`)
        return null
    }
}

function clearScreen(){
    // Clears entire screen
    currentScreen.textContent = ''
    resultScreen.textContent = '0'
    num1 = ""
    num2 = ""
    currentOperator = null
    isCleared = true
}

function removeLast(){
    // Gets rid of last character on the result screen
    resultScreen.textContent = resultScreen.textContent.substring(0, resultScreen.textContent.length - 1)
}

function parseExpression(str) {
    const pattern = /(\d+)\s*([+\-x÷])\s*(\d+)/;
    const matches = str.match(pattern);
  
    if (matches) {
      const [_, num1, operator, num2] = matches;
      return {
        num1: parseInt(num1),
        operator,
        num2: parseInt(num2)
      };
    } else {
      return null;
    }
}

function evaluateOperation(){
    // Generates num1, num2, and operator based on resultScreen text and calls for it to be evaluated
    const expression = parseExpression(resultScreen.textContent);

    // if (expression) {
    // console.log("First Number:", expression.num1);
    // console.log("Operator:", expression.operator);
    // console.log("Second Number:", expression.num2);
    // } else {
    // console.log("Invalid expression.");
    // }
    num1 = expression.num1
    num2 = expression.num2
    currentOperator = expression.operator
    // console.log("First Number:", num1)
    // console.log("Operator:", currentOperator)
    // console.log("Second Number:", num2)
    let result = operate(num1, num2, currentOperator)
    if(result != null){
        updateScreen(result)
    }
}

function updateScreen(result){
    // Update screen with result
    currentScreen.textContent = resultScreen.textContent + "="
    resultScreen.textContent = result
}