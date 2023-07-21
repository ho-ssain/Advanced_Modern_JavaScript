// every method
// The every method is a built-in array method in JavaScript that checks whether all elements in an array pass a specific condition. It returns a boolean value true if all elements satisfy the condition, otherwise false.

// The every method will return true only if the callback function returns true for every element in the array. If any element fails to satisfy the condition, the every method returns false.
const numbers = [1, 2, 3, 4, 5];
const areAllPositive = numbers.every((num) => num > 0);

console.log(areAllPositive); // Output: true (all elements are greater than 0)
