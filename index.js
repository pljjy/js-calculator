import {
  btnNums,
  btnAdd,
  btnSub,
  btnDivide,
  btnMultiply,
  btnDelete,
  btnClear,
  btnEquals,
  btnDot,
  currentValue,
  lastValue,
  lastOperation,

} from "./constants.js";
// btnNums[0] = btn with 0 as text 🫠


// FUNCTIONS
function concatToCurrentValue(value) {
  if (value > 12 || value === null) return;
  currentValue.textContent += value;
}

function deleteLastSymbol() {
  if (currentValue.textContent.length == 1) {
    currentValue.textContent = "";
  }
  else {
    currentValue.textContent = currentValue.textContent.substring(0, currentValue.textContent.length - 1);
  }
}

function clearValues() {
  lastValue.textContent = "";
  lastOperation.textContent = "";
  currentValue.textContent = "";
}

function keyboardListener(event) {
  if (!isNaN(event.key)) concatToCurrentValue(event.key);
  if (event.key === "Escape" || event.key === "c") clearValues();
  if (event.key === "Backspace") deleteLastSymbol();
  if (event.key === "Enter") equals();
  if (event.key === "+") add();
  if (event.key === "-") sub();
  if (event.key === "*") multiply();
  if (event.key === "/") divide();
  if (event.key === ".")
    useDot()
}

function equals() {
  let val1 = parseFloat(lastValue.textContent != 0? lastValue.textContent : 0);
  let val2 = parseFloat(currentValue.textContent)
  let result;

  switch (lastOperation.textContent) {
    case "+": result = val1 + val2;
      break;
    case "-": result = val1 - val2;
      break;
    case "*": result = val1 * val2;
      break;
    case "/": result = val1 / val2;
      break;
    default:
      currentValue.textContent = "3RR0R!";
      lastOperation.textContent = "";
      lastValue.textContent = "";
      return;
  }
  result = parseFloat(result).toFixed(2) == parseInt(result)? parseInt(result) 
                                                            : parseFloat(result).toFixed(2);
  lastValue.textContent = val2;
  currentValue.textContent = result;
}

function performOperation(operation) {
  lastValue.textContent = currentValue.textContent;
  lastOperation.textContent = operation;
  currentValue.textContent = "";
}

function useDot(){
  if(currentValue.textContent !== "" && !currentValue.textContent.includes("."))
    concatToCurrentValue(".");
}

function add() {
  performOperation("+");
}

function sub() {
  performOperation("-");
}

function multiply() {
  performOperation("*");
}

function divide() {
  performOperation("/");
}

// EVENT LISTENERS
btnNums.forEach((element) => {
  element.addEventListener("click", () =>
    concatToCurrentValue(element.textContent)
  );
});

btnClear.addEventListener("click", clearValues);
btnDelete.addEventListener("click", deleteLastSymbol);
btnEquals.addEventListener("click", equals);

btnAdd.addEventListener("click", add);
btnSub.addEventListener("click", sub);
btnMultiply.addEventListener("click", multiply);
btnDivide.addEventListener("click", divide);
btnDot.addEventListener("click", useDot);

document.addEventListener("keydown", keyboardListener);
