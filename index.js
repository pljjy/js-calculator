import {
  intToArray,// REMOVE
  arrayToInt,// THESE TWO   
  btnNums,
  btnAdd,
  btnSub,
  btnDivide,
  btnMultiply,
  btnDelete,
  btnClear,
  btnEquals,
  currentValue,
  lastValue,
} from "./constants.js";

/*
=================================================

TODO: remove the whole array - int system, instead use
jsut integers, add some methods to ./constants.js

=================================================
*/

// btnNums[0] = btn with 0 as text 🫠
var currentArray = [];
var lastArray = [];
var operation;

// FUNCTIONS
function refreshScreen() {
  currentValue.textContent = arrayToInt(currentArray);
  lastValue.textContent = arrayToInt(lastArray);
}

function concatToCurrentArray(value) {
  if (currentArray.length >= 13 || value === null) return;
  currentArray.push(value);
  currentValue.textContent = arrayToInt(currentArray);
}

function clearValues() {
  currentArray = [];
  lastArray = [];
  operation = "";
  refreshScreen();
}

function deleteLastSymbol() {
  if (currentArray.length <= 1) {
    currentArray = [];
    currentValue.textContent = "";
  } else {
    currentArray.pop();
    currentValue.textContent = arrayToInt(currentArray);
  }
}

function equals() {
  let value1 = arrayToInt(lastArray);
  let value2 = arrayToInt(currentArray);
  let result;

  switch (operation) {
    case "add":
      result = value1 + value2;
      break;
    case "sub":
      result = value1 - value2;
      break;
    case "multiply":
      result = value1 * value2;
      break;
    case "divide":
      result = value1 / value2;
      break;
    default: // if this happens, check assigned value to [operation] in operation functions
      lastArray = [];
      refreshScreen();
      currentValue.textContent = "3RR0R!";
      return;
  }
  currentArray = intToArray(result);
  lastArray = intToArray(value2);
  refreshScreen();
}

function add() {
  performOperation("add");
}

function sub() {
  performOperation("sub");
}

function multiply() {
  performOperation("multiply");
}

function divide() {
  performOperation("divide");
}

function performOperation(str) {
  operation = str;
  lastArray = currentArray;
  currentArray = [];
  refreshScreen();
}

// EVENT LISTENERS
btnNums.forEach((element) => {
  element.addEventListener("click", () =>
    concatToCurrentArray(element.textContent)
  );
});
btnClear.addEventListener("click", clearValues);
btnDelete.addEventListener("click", deleteLastSymbol);
btnEquals.addEventListener("click", equals);

btnAdd.addEventListener("click", add);
btnSub.addEventListener("click", sub);
btnMultiply.addEventListener("click", multiply);
btnDivide.addEventListener("click", divide);
