//> Function declaration
// A function is a reusable block of code in JavaScript that performs a specific task or calculates a value. It allows you to encapsulate a set of statements into a single unit, which can be invoked (called) from anywhere in the code. Functions are essential building blocks in programming, as they enable code modularity, reusability, and organization.

function functionName(parameter1, parameter2, parameterN) {
  // Function body (code to be executed)
  // ...statements...
  return result; // (optional) - The value to be returned from the function
}

function addTwo(a, b) {
  return a + b;
}

addTwo(100, 123);
// console.log(addTwo)

// odd or even

const prompt = require("prompt-sync")();
function isEven(n) {
  return n % 2 === 0;
}
const number = prompt("Enter a number: ");
const res = isEven(number);
if (res) {
  console.log(`${number} is Even!`);
} else {
  console.log(`${number} is Odd`);
}
