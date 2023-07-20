//> if-else
/*
The if...else statement is used in JavaScript for conditional execution of code. It allows you to specify different blocks of code to be executed based on a given condition. Here's the syntax for the if...else statement:

if (condition) {
  code to be executed if the condition is true
} else {
  code to be executed if the condition is false
}

The condition is an expression that evaluates to either a truthy or falsy value. If the condition evaluates to true (or truthy), the code within the if block is executed. If the condition evaluates to false (or falsy), the code within the else block is executed.

Here's an example to illustrate the usage of if...else:
*/
let num = 7;

if (num % 2 === 0) {
  console.log(num + " is a even number");
} else {
  console.log(num + " is a odd number");
}
