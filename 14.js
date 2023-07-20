//> Ternary operator
// The ternary operator, also known as the conditional operator, provides a concise way to write conditional expressions in JavaScript. It allows you to evaluate a condition and return one of two expressions based on the result of the condition. The syntax of the ternary operator is as follows:

// condition ? expression1 : expression2
// The ternary operator essentially functions as a short form of an if...else statement.

let age = 20;
let message =
  age >= 18
    ? console.log("You are an adult.")
    : console.log("You are not an adult");
console.log(message);
