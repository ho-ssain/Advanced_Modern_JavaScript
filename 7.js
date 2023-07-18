//> Some commonly used string methods in JavaScript

//>(1):  'length': returns the number of characters in a string.
let str1 = "Hello, World!";
console.log(str1.length); // Output: 13

//>(2):  toUpperCase() and toLowerCase():
// Convert a string to uppercase or lowercase, respectively.
let str2 = "Hello, World";
console.log(str2.toUpperCase()); // 'HELLO, WORLD!'
console.log(str2.toLowerCase()); // 'hello, world!'

//>(3): charAt() and charCodeAt():
// charAt(index) returns the character at a specified index in the string.
// charCodeAt(index) returns the Unicode value of the character at a specified index.
let str3 = "Hello, World!";
console.log(str3.charAt(7));
console.log(str3.charCodeAt(3));

//>(4): substring() and slice():
// substring(startIndex, endIndex) returns a portion of the string starting from startIndex to endIndex (exclusive).
// slice(startIndex, endIndex) also returns a portion of the string, similar to substring().
let str4 = "Hello, World!";
console.log(str4.substring(7, 13));
console.log(str4.slice(7, 12));

//>(5): split(): Splits a string into an array of substrings based on a specified separator.
let str5 = "Hello, World! How are You?";
console.log(str5.split(",")); // [ 'Hello', ' World! How are You?' ]

console.log(str5.split(" ")); // [ 'Hello,', 'World!', 'How', 'are', 'You?' ]

//>(6): replace():
// Replaces a specified substring or pattern with a new substring.
let str6 = "Hello, World!";
console.log(str6.replace("World", "John"));

//>(7): indexOf() and lastIndexOf():
// indexOf(substring) returns the index of the first occurrence of substring within the string.
// lastIndexOf(substring) returns the index of the last occurrence of substring within the string.

let str7 = "Hello, world!";
console.log(str7.indexOf("o")); // 4
console.log(str7.lastIndexOf("o")); /// 8

//>(8): trim():
// Removes leading and trailing whitespace from a string.
let str8 = "   Hello, Wordl!   ";
console.log(str8.trim());
