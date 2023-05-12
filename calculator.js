var firstNumber = null;
var operator = null;
var isResultDisplayed = false;

function selectOperator(selectedOperator) {
  operator = selectedOperator;

  var input = document.getElementById("calculatorInput").value;
  if (!isResultDisplayed) {
    firstNumber = parseFloat(input);
  }

  document.getElementById("calculatorInput").value = "";
  isResultDisplayed = false;
}

function calculate() {
  var input = document.getElementById("calculatorInput").value;
  var secondNumber = parseFloat(input);
  var currentResult;

  // Perform calculation based on the firstNumber, operator, and secondNumber
  switch (operator) {
    case '+':
      currentResult = firstNumber + secondNumber;
      break;
    case '-':
      currentResult = firstNumber - secondNumber;
      break;
    case '*':
      currentResult = firstNumber * secondNumber;
      break;
    case '/':
      currentResult = firstNumber / secondNumber;
      break;
  }

  // Update the result display
  document.getElementById("result").innerHTML = "Result: " + currentResult;
  firstNumber = currentResult;
  isResultDisplayed = true;
}

function clearCalculator() {
  document.getElementById("calculatorInput").value = "";
  document.getElementById("result").innerHTML = "Result: 0";

  firstNumber = null;
  operator = null;
  isResultDisplayed = false;
}