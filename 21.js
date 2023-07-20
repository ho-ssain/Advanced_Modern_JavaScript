//> Intro to arrays
// In JavaScript, an array is a data structure used to store multiple values in a single variable. It allows you to group related data together, making it easier to manage and manipulate collections of values. Arrays can store elements of any data type, including numbers, strings, objects, and even other arrays. Each element in an array is assigned a unique index, starting from 0.

// creating an Array:
const fruits = ["apple", "banana", "orange"];

// Accessing Array Elements:
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Modifying Array Elements:
fruits[1] = "water-melon";
console.log(fruits);

// Array Length:
console.log(fruits.length);
/*
Array Methods:
JavaScript provides a set of built-in methods that allow you to manipulate arrays. Some commonly used methods include:

--> push: Adds one or more elements to the end of an array.

--> pop: Removes the last element from an array.

-->splice: Adds or removes elements from an array at a specific index.

--> concat: Combines two or more arrays to create a new array.

--> slice: Returns a new array with a subset of elements from an existing array.

--> forEach: Executes a provided function once for each array element.

*/
const numbers = [1, 2, 3, 4, 5, 6];

numbers.push(7); // Adds 7 at the end. It modifies the original array and returns the new length of the array.

numbers.pop(); // Remove the last element. It modifies the original array and returns the removed element.

numbers.splice(1, 3); // remove element at index 1 to 3
console.log(numbers);

let newNumbers = numbers.concat([7, 8]);
console.log(newNumbers);

newNumbers.forEach((n) => {
  console.log(n * 2);
});

// shift():

// The shift() method removes the first element from an array.
// It modifies the original array and returns the removed element

let fruits2 = ["apple", "banana", "orange"];

let removedElement = fruits2.shift();
console.log(fruits2); // Output: ['banana', 'orange']
console.log(removedElement); // Output: 'apple'

// unshift():

// The unshift() method adds one or more elements to the beginning of an array.
// It modifies the original array and returns the new length of the array.

let newLength = fruits2.unshift("orange", "grape");
console.log(fruits2); // Output: ['orange', 'grape', 'apple', 'banana']
console.log(newLength); // Output: 4
