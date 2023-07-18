//> Data Types-:

/*
JavaScript has several built-in data types that are used to represent different kinds of values. The following are the fundamental data types in JavaScript:

Primitive Data Types:
>(1) String: Represents a sequence of characters and is enclosed in single quotes ('') or double quotes ("").

>(2) Number: Represents numeric values, including integers and floating-point numbers.

>(3) Boolean: Represents the logical values true or false.

>(4) Null: Represents the absence of any object value. It is a primitive value.

>(5) Undefined: Represents an uninitialized or unassigned value of a variable.


>(6) Symbol: Introduced in ES6, symbols are unique and immutable values often used as property keys in objects.
*/

// Examples-:
const name = "Hossain"; // string
let age = 25; // number
let isStudent = true; // boolean
let person = null; // null
let city; // undefined
let id = Symbol("id"); // symbol

// typeof operator-:
// The typeof operator is used to determine the data type of a value or variable. It returns a string representation of the data type of a value or variable.
console.log(typeof age);

//> Object Data Type:
// Object: Represents a collection of key-value pairs or properties, allowing you to store and organize complex data structures.

let employee = {
  name: "Hasan",
  age: 23,
  isMale: true,
};

//> Special Data Types:
// Function: Functions are objects in JavaScript and can be assigned to variables or passed as arguments to other functions.
// Array: Represents an ordered collection of values, accessed by numeric indices.
// Date: Represents a specific date and time.
// RegExp: Represents a regular expression pattern used for matching and manipulating strings.

function greet() {
  console.log("hello!!");
}

let numbers = [1, 2, 3, 4, 5];

let currentDate = new Date();

let pattern = /abc/;
