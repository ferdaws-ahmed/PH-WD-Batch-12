

let num1 = '10.5678';
let num2 = '5.4321';
let total = parseFloat(num1) + parseFloat(num2);

let convertToNumber = total.toFixed(1);
let result = parseFloat(convertToNumber);
console.log(result);