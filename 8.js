//> In JavaScript, you can convert between strings and numbers using built-in methods and operators. Here's how you can perform string-to-number and number-to-string conversions:

//> (1)----> String to Number Conversion:
// parseInt(string, radix) converts a string to an integer number using a specified radix (base). If the radix is not provided, it assumes base 10.

// parseFloat(string) converts a string to a floating-point number.

let numStr = "123";
let num = parseInt(numStr);
console.log(num); // 123

let floatStr = "3.1415";
let floatNum = parseFloat(floatStr);
console.log(floatNum); // 3.14

let numStr2 = "10101010";
let num2 = parseInt(numStr2, 2);
console.log(num2);

// Unary Plus Operator (+):
// The unary plus operator can be used to convert a string to a numeric value.
// It performs implicit type coercion and converts the string to a number.
let numStr3 = "1234";
let num3 = +numStr3;
console.log(num3); // 1234

// Number Constructor:
// The Number() constructor can be used to create a number object or perform string-to-number conversion.
let numStr4 = "123";
let num4 = Number(numStr4);
console.log(num4); // 123

//> (2)--> Number to String Conversion:
// toString() converts a number to its corresponding string representation.

let num6 = 123;
let numStr6 = num.toString();
console.log(numStr); // Output: '123'

let floatNum6 = 3.14;
let floatStr6 = floatNum + "";
console.log(floatStr); // Output: '3.14'

// It's important to note that some operators or functions in JavaScript automatically perform type conversion. For example, when using the + operator with a string and a number, the number is automatically coerced into a string.

let num7 = 123;
let str7 = "The number is: " + num7;
console.log(str7); // Output: 'The number is: 123'
// In this example, the number 123 is automatically converted to a string and concatenated with the string 'The number is: '.
