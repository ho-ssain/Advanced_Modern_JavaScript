// filter method
// The filter method is another built-in array method in JavaScript that allows you to create a new array containing elements that pass a specific condition. It iterates through the elements of an array and applies a provided callback function to each element. If the callback function returns true for an element, that element is included in the new array. If the callback function returns false for an element, that element is excluded from the new array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((n) => n % 2 === 0);
