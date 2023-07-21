// find method
// The find method stops searching and returns the first element that makes the callback function return true. If no element satisfies the condition, it returns undefined.

const numbers = [1, 3, 5, 6, 7, 9, 8, 10];
const foundNumber = numbers.find((num) => num % 2 === 0);

console.log(foundNumber); // Output: 6
