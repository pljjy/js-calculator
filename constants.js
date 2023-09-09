const btnNums = [document.querySelector(".zero"), document.querySelector(".one"), document.querySelector(".two"),
document.querySelector(".three"), document.querySelector(".four"), document.querySelector(".five"), document.querySelector(".six"),
document.querySelector(".seven"), document.querySelector(".eight"), document.querySelector(".nine")];

const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".sub");
const btnDivide = document.querySelector(".divide");
const btnMultiply = document.querySelector(".multiply");
const btnDelete = document.querySelector(".delete");
const btnClear = document.querySelector(".clear");
const btnEquals = document.querySelector(".equals");
const currentValue = document.querySelector("#current-value");
const lastValue = document.querySelector("#last-value");
const lastOperation = document.querySelector("#last-operation");


export {
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
  lastOperation,
};
