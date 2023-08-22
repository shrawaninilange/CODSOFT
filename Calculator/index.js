const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const buttons = document.querySelectorAll(".btn[data-value]");

let currentInput = "";
let currentOperator = "";
let firstOperand = null;

clearButton.addEventListener("click", clearDisplay);

buttons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  const buttonValue = event.target.dataset.value;

  if (buttonValue === "=") {
    if (currentInput !== "" && firstOperand !== null) {
      const secondOperand = parseFloat(currentInput);
      const result = performCalculation(firstOperand, currentOperator, secondOperand);
      display.textContent = result;
      currentInput = result.toString();
      firstOperand = null;
      currentOperator = "";
    }
  } else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
    if (currentInput !== "") {
      firstOperand = parseFloat(currentInput);
      currentOperator = buttonValue;
      currentInput = "";
    }
  } else {
    currentInput += buttonValue;
    display.textContent = currentInput;
  }
}

function performCalculation(a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return b;
  }
}

function clearDisplay() {
  display.textContent = "0";
  currentInput = "";
  firstOperand = null;
  currentOperator = "";
}
