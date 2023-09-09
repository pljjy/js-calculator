const arrayToInt = function (array) {
  if(array == [] || array.length == 0) return "";
  return parseInt(array.reduce((prev, current) => prev + "" + current));
};

const intToArray = function (num){
  return num.toString().replace(/\D/g, '0').split('').map((element)=>parseInt(element));
}


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


export {
  intToArray,
  arrayToInt,
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
};