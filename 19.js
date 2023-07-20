//> Loops
// Loops in JavaScript are used to repeat a block of code multiple times until a specific condition is met. They provide a powerful way to automate repetitive tasks and iterate over data structures. JavaScript offers several types of loops: for, while, do...while, and for...in / for...of loops. Let's discuss each of them in detail with meaningful examples:

//> For Loop:
// The for loop is commonly used when you know the number of iterations in advance. It consists of three parts: initialization, condition, and increment/decrement.

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// In this example, the loop starts with i initialized to 0. The condition i < 5 is checked before each iteration, and if it's true, the code block inside the loop is executed. After each iteration, i is incremented by 1. The loop continues until the condition becomes false (i reaches 5).

//> while Loop:
// The while loop is used when the number of iterations is not known in advance. It repeatedly executes the code block as long as the specified condition is true.
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// In this example, the loop starts with i equal to 0. The condition i < 5 is evaluated before each iteration. If it's true, the code block inside the loop is executed, and i is incremented by 1. The loop continues until the condition becomes false.

//> Do...While Loop:
// The do...while loop is similar to the while loop, but it guarantees that the code block is executed at least once, as the condition is checked after the first iteration.
let c = 0;
do {
  console.log(c);
  c++;
} while (c < 5);
// In this example, the code block is executed first, printing 0. Then, the condition i < 5 is evaluated. If it's true, the loop continues and i is incremented by 1. The loop repeats until the condition becomes false.

//> For...in Loop:
// The for...in loop is used to iterate over the properties of an object. It retrieves the keys of the object, allowing you to perform operations on each property.
const person = {
  name: "Hossain",
  age: 24,
  city: "Dhaka",
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// In this example, the for...in loop iterates over the properties of the person object. On each iteration, the key variable holds the current property key, which is used to access the corresponding value with person[key].

//> For...of Loop:
// The for...of loop is used to iterate over iterable objects such as arrays, strings, and other iterable data structures. It allows direct access to the values of the iterable.
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}
// In this example, the for...of loop iterates over the numbers array, assigning each value to the number variable in each iteration. The code block inside the loop is then executed with direct access to the value of each element in the array.

// These loop structures provide different ways to repeat code execution based on specific conditions or to iterate over data structures. Choosing the appropriate loop depends on the situation and the type of iteration required in your JavaScript program.
