// reduce method
// The reduce method is a powerful built-in array method in JavaScript that allows you to reduce an array to a single value by applying a provided callback function to each element of the array. The reduce method iterates through the elements of an array and accumulates a result based on the logic defined in the callback function.

// The syntax for the reduce method is as follows:

/*
const result = array.reduce(callback(accumulator, currentValue, index, array) {
  / Function body (code to be executed for each element)
  / Return the updated accumulator
}, initialValue);

array: The array on which the reduce method is called.
callback: A function that is called for each element of the array.
accumulator: A variable that stores the intermediate result during the reduction process. It is updated after each iteration based on the return value of the callback function.
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array on which the reduce method was called.

!initialValue (optional): The initial value of the accumulator. If provided, the reduction starts with this value. If not provided, the first element of the array is used as the initial value.


*/

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);

console.log(sum); // Output: 15

const words = ["Hello", " ", "world", "!"];
const sentence = words.reduce((accumulator, word) => accumulator + word, "");

console.log(sentence); // Output: 'Hello world!'
