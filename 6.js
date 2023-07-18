//> String indexing

// In JavaScript, strings are zero-indexed, which means that each character in a string is assigned an index starting from 0. This indexing allows you to access individual characters or substrings within a string.

// To access a specific character in a string, you can use square brackets [] along with the index of the desired character. The index represents the position of the character within the string.

// Example:

let str1 = "Hello, World!";
console.log(str1[0]); // Output: 'H'
console.log(str1[1]); // Output: 'e'
console.log(str1[2]); // Output: 'l

console.log(str1.length);

// last index = length - 1
console.log(str1[str1.length - 1]); // Output: '!'
console.log(str1[str1.length - 2]); // Output: 'd'
