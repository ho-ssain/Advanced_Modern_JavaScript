// String concatenation is the process of combining two or more strings together to create a single, larger string. In JavaScript, there are several ways to perform string concatenation:

/*
(1). Using the + Operator:
The + operator can be used to concatenate strings together.
*/

let str1 = "Hello";
let str2 = "World";
let greeting1 = str1 + " " + str2;
console.log(greeting1); // Output: 'Hello World'

/*
(2). Using the concat() Method:
The concat() method is available on string objects and can concatenate multiple strings.
*/
let str3 = "Hello";
let str4 = "World";
let greeting2 = str3.concat(" ", str4);
console.log(greeting2); // Output: 'Hello World'

/*
(3). Using Template Literals (Template Strings):
Template literals, introduced in ES6, allow for more flexible and readable string concatenation by using backticks (`) to define the string and placeholders (${expression}) to embed variables or expressions within the string.
 */
let age = 22;
let firstName = "Hossain";
let aboutMe = `My name is ${firstName} and my age is ${age}`;
console.log(aboutMe);
// In this example, the template literal is used to concatenate the strings 'Hello', ' ', and 'World'.

/*
String concatenation is not limited to only string literals. You can concatenate variables, expressions, and other strings as needed. The + operator, concat() method, and template literals provide flexibility and options for performing string concatenation based on your preferences and the requirements of your code.

It's important to note that when concatenating non-string values (such as numbers or booleans) with strings, JavaScript automatically converts them to strings before concatenation, resulting in string concatenation.

*/
