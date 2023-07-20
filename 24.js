//> Array destructuring
// Array destructuring is a feature introduced in ECMAScript 2015 (ES6) that allows you to extract elements from an array and assign them to individual variables in a more concise and convenient way. It provides a simple syntax to unpack array elements into separate variables, making it easier to work with arrays and simplifying assignments.

/*

let [variable1, variable2, ..., variableN] = array;

Here's how array destructuring works:

1. You define an array with elements that you want to destructure.

2. On the left side of the assignment, you use square brackets [] with variable names that will receive the values from the array.

3. The variables on the left side are assigned the values from the corresponding elements in the array.

*/

let numbers = [1, 2, 3];
let [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);

// Skipping elements
let fruits = ["apple", "banana", "orange"];
let [f1, , f3] = fruits;
console.log(f1, f3);

// Rest Element
let colors = ["red", "green", "blue", "yellow"];
let [c1, c2, ...secondColors] = colors;
console.log(secondColors);
