// some method
// The some method is another built-in array method in JavaScript that checks whether at least one element in an array satisfies a specific condition. It returns a boolean value true if any element passes the condition, otherwise false.

// The some method will return true if the callback function returns true for at least one element in the array. If none of the elements satisfy the condition, the some method returns false.

const numbers = [1, 3, 5, 6, 7, 9, 8, 10];
const hasAnyEvenNumber = numbers.some((num) => num % 2 === 0);

console.log(hasAnyEvenNumber); // Output: true (at least one element is even)
