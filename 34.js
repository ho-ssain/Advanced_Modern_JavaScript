// Function Expression

// A function expression is a way of defining a function in JavaScript using an expression instead of the regular function declaration. In a function expression, the function is assigned to a variable, making the function itself a value that can be passed around, returned from other functions, or used in various ways just like any other data type.

let square = function (num) {
  return num * num;
};
console.log(square);

// Function expressions are commonly used in several scenarios:

// Anonymous Functions: Function expressions can be used to create anonymous functions, which are functions without a specified name.
let add = function (a, b) {
  return a + b;
};

// Higher-Order Functions: Function expressions are often used in higher-order functions, where functions can be passed as arguments or returned from other functions.
function operation(operationFunction, a, b) {
  return operationFunction(a, b);
}

let result = operation(
  function (a, b) {
    return a * b;
  },
  5,
  6
);

// Immediately Invoked Function Expressions (IIFE): Function expressions can be immediately invoked using parentheses, creating self-executing functions.

(function () {
  console.log("This is an IIFE");
})();
