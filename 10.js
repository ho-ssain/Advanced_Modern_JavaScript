let nums = [1, 2, 3, 5, 9, 76];
console.log(Math.max(...nums));
// It uses the spread syntax (...) within the Math.max() function call.
// The spread syntax allows you to expand an array into individual elements

// difference between spread and rest parameters
// The spread operator is used to expand an array into its elements, while the rest operator does the opposite by reducing a set of elements into one array.

/**
You are correct! The spread operator and the rest operator may appear similar because they both use the same three-dot notation (`...`), but they have different behaviors and serve distinct purposes. Here's how you can identify and differentiate between them:

Spread Operator:
- Used in the context of an array or an iterable.
- Expands an array into individual elements.
- Used to pass elements of an array as separate arguments to a function, create a copy of an array, concatenate arrays, or initialize array literals.
- Example: `const arr = [1, 2, 3]; console.log(...arr); // Output: 1 2 3`

Rest Operator:
- Used in the context of a function parameter.
- Collects multiple arguments passed to a function and combines them into a single array.
- Used to handle a variable number of arguments or to gather remaining arguments into an array.
- Example: `function sum(...nums) { // rest parameter console.log(nums); } sum(1, 2, 3); // Output: [1, 2, 3]`

In summary, the spread operator is used for expanding an array into individual elements, whereas the rest operator is used for gathering individual elements into an array.

 */
//3 Spread Operator:

// Creating a Copy of an Array
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

// Concatenating Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatArray = [...array1, ...array2];

// Passing Elements of an Array as Arguments to a Function
const array = [1, 2, 3];
function add(a, b, c) {
  return a + b + c;
}
const result = add(...array);

// Initializing Array Literals
const zoo = [...animals, ...birds];

//3 Rest Operator:

// Handling a Variable Number of Arguments
function Xor(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

// Gathering Remaining Arguments into an Array
function multiply(multiplier, ...nums) {
  return nums.map((num) => multiplier * num);
}
