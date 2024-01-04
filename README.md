# JavaScript Basic

---

## Module 1 (introduction-to-javascript)

<------------------------------------------------------------------>

### Why Learn JS?

- Most popular programming language in the world.
- Low barrier to entry in the field.
- It is the language of the Web and now well beyond the Web

### Some interesting points about the history of JS are

- The 1st version of the JS language was written in 1995 in 10 days by Brandon Eich, who worked for Netscape.
- It was originally a language called Mocha and they changed the name to JavaScript for marketing strategy.
- The early years of JS were plagued by bad implementations and developers who despised the language. The language was frequently misunderstood, due to poor documentation.
- Douglas crockford did a lot to help people understand the incredible value of JS as a language and it's strengths as well as weaknesses. His legendary book is 'JS: The Good Parts'
- Overall it's very expressive and a interesting language and also most dominating language of the todays-world.

### JS Versions

| ECMAScript 1 - 1997
| ECMAScript 3 - 1999
| ECMAScript 4 - Never Released
| ECMAScript 5 - 2009
| ECMAScript 2015 (ES6)
| ECMAScript 2016
| ECMAScript 2017

ECMA is the European Computer Manufactures Association, the standardizing body of the JS language.

2009 was the year that solidified JS's reign as king of Scripting languages for he web.

The strengths and weaknesses of the language are better understood, and the group working on the language are working to build on the strengths and mitigate the weaknesses.

### JavaScript Variables

Write code that is as generalizable as possible!
It's a good practice, it allows the code to be reused and helps limit the effort of writing and maintaining redundant code.

**Variables are like containers that hold something temporarily.**

```js
var x = ""; // This creates a variable called x and assigns it an empty string.

var cheese = "yummy"; // This creates a variable called cheese and assigns it a value 'yummy'

var age = 25; // This creates a variable called cage and assigns it a value 25
```

### Naming variables that are not supported

```js
var 1cat = '' // X
var $cat = '' // X ($ is used by libraries)
var my-cat = '' // X (mistakes - for minus)
var my cat = '' // X
var new = '' // X (new is a keyword in js)

```

JS is a Case Sensitive so,

```js
var cat = "meo1";
var CAT = "meo2";
var Cat = "meo3";

// These are three different variables with three different values.

// Camel Case-: (conventional)
var myCat = "camel case name";

// snake_case-:
var my_cat = "snake case name";
```

- JS is a loosely typed language by default.
- We can use typeof function to check the type of a var.

### Arrays

It is like a container with sub-containers. We can use this to hold multiple values. and each values can be of any data type, including numbers, strings, objects, and even other arrays. The values in an array are indexed starting from 0.
In JavaScript, an array is a special type of object.

```js
// Creating an array with three elements
let fruits = ["Apple", "Banana", "Orange"];
let colors = new Array("red", "green", "blue");
```

### array methods

1. **push()**: Adds one or more elements to the end of an array.

2. **pop()**: Removes the last element from an array.

3. **shift()**: Removes the first element from an array.

4. **unshift()**: Adds one or more elements to the beginning of an array.

5. **concat()**: Combines two or more arrays.

6. **slice()**: Returns a portion of an array without modifying the original array.

7. **splice()**: Changes the contents of an array by removing or replacing existing elements.

8. **indexOf()**: Returns the index of the first occurrence of a specified element in an array.

9. **includes()**: Checks if an array contains a specific element and returns a boolean.

10. **join()**: Joins all elements of an array into a string.

11. **reverse()**: Reverses the order of elements in an array.

12. **sort()**: Sorts the elements of an array (by default, in lexicographic order).

13. **filter()**: Creates a new array with elements that pass a provided function's test.

14. **map()**: Creates a new array by applying a function to each element of an existing array.

15. **forEach()**: Executes a provided function once for each array element.

16. **reduce()**: Reduces an array to a single value by applying a function to each element.

## Module 2 (controlling-logical-flow-in-javascript)

<------------------------------------------------------------------>

### Operators, Booleans & Selection in JS

```js
+, -, *, /, %
true
false
if --selection statement
else if
else
switch
?: -- ternary operator
```

**Falsy Values:**

1. false: The boolean value false.
2. 0: The number zero.
3. -0: Negative zero.
4. 0n: BigInt zero.
5. '' or "": Empty string.
6. null: Represents the absence of any object value.
7. undefined: Denotes an uninitialized or undefined value.
8. NaN: Represents a "Not-a-Number" value resulting from an invalid mathematical operation.
9. document.all: A non-standard property that evaluates to false in modern browsers but is historically considered falsy.

**Truthy Values:**

1. true: The boolean value true.
2. Any non-zero number: For example, 1, -1, 42.3, etc.
3. Non-empty strings: For example, 'hello'.
4. Objects: Any non-null object.
5. Arrays: Even empty arrays [] are truthy.
6. Functions: Any non-null function.
7. BigInts: Any non-zero BigInt (1n, -1n, etc.).
8. Other truthy values: Certain objects, such as instances of Date, RegExp, and more, are truthy.

### Comparison and logical operator

```js
==, ===, >, >=, <, <=, &&, ||, !
```

In JavaScript, `===` and `==` are two different equality operators, and they behave in distinct ways:

1. **Strict Equality Operator (`===`):**

   - Also known as the "strict equality" operator.
   - Compares both value and type.
   - Returns `true` if both the value and type are the same.
   - Returns `false` otherwise.

   Example:

   ```javascript
   5 === "5"; // false (number is not equal to string)
   5 === 5; // true  (number is equal to number)
   ```

2. **Equality Operator (`==`):**

   - Also known as the "abstract equality" or "loose equality" operator.
   - Only compares values after attempting type coercion (conversion).
   - Returns `true` if the values are equal after type coercion.
   - May lead to unexpected results due to automatic type conversion.

   Example:

   ```javascript
   5 == "5"; // true  (after type coercion, the values are considered equal)
   5 == 5; // true  (values are equal)
   ```

Using `===` is generally recommended because it avoids unexpected type coercion and provides a more strict comparison. It ensures that both the value and the type must be the same for the comparison to evaluate to `true`. This can help prevent subtle bugs that may arise from unintentional type conversions.

On the other hand, `==` performs type coercion, which means it may convert values to a common type before making the comparison. While this can be convenient in some cases, it can also lead to unexpected results, so it's important to be aware of how type coercion works when using `==`.

In most cases, it's considered best practice to use `===` for equality comparisons in JavaScript.

### Loops in JS

- for loop
- while loop
- do while loop
- for of loop
- for in loop

### Template Literals

using backticks in JS along with ${} around your expressions allows you to embed them in your strings

### Structured Programming

SP makes use of these three structures-:

1. Sequence-
2. Selection-
3. loop-

### Refactoring Code

The process of refactoring code is the process of making our code simpler. We should always look for ways to refactor our code, and we will almost always find some ways to do so!
**Make Comments**
As you refactor your code, it will become more dense. Add comments that describe what you are doing.

### Functions

Reusable Sets of instructions
--> A function lets us combine a group of instructions together ans give them a name.

Passing in Data
--> Functions can take data through parameters that are passed into the function.

Returning Data
--> A function can return data after having performed whatever operations that function does on that data.

Here's a concise overview of functions in JavaScript:

1. **Declaration:**

   - Functions can be declared using the `function` keyword.

2. **Parameters:**

   - Functions can accept parameters, which are variables passed into the function.

3. **Return:**

   - Functions can return a value using the `return` keyword.

4. **Function Expression:**

   - Functions can be assigned to variables, known as function expressions.

5. **Arrow Functions:**

   - Introduced in ES6, arrow functions provide a concise syntax for function expressions.

6. **Anonymous Functions:**

   - Functions without a name are called anonymous functions.

7. **Hoisting:**

   - Function declarations are hoisted, meaning they can be used before they are declared.

8. **Scope:**

   - Functions create their own scope, and variables defined inside a function are local to that function.

9. **Closures:**

   - Functions can form closures, allowing them to access variables from their containing scope even after the parent function has finished execution.

10. **Callback Functions:**

    - Functions passed as arguments to other functions are known as callback functions.

11. **Higher-Order Functions:**

    - Functions that take other functions as arguments or return functions are called higher-order functions.

12. **Immediately Invoked Function Expressions (IIFE):**

    - Functions that are executed immediately after being defined.

13. **Function Methods:**

    - Functions are objects and can have methods, like `bind`, `apply`, and `call`.

14. **Function Constructor:**

    - Functions can be created using the `Function` constructor, but this approach is less common.

15. **Rest and Spread Operators:**

    - The rest (`...`) and spread (`...`) operators are used for handling variable numbers of arguments.

16. **Default Parameters:**
    - Function parameters can have default values, which are used if no value is provided.

Functions are fundamental to JavaScript, providing a way to encapsulate and reuse code, leading to modular and maintainable applications.

Function:

- Definition: A function is a standalone block of code that performs a specific task.
- Usage: Functions can be standalone or associated with an object (in which case they are referred to as methods).
- Declaration: Functions can be declared using the function keyword.
- Invocation: Functions can be called independently.

Method:

1. Definition: A method is a function that is associated with an object or a class.
2. Usage: Methods are invoked on objects and operate on the object's data.
3. Declaration: Methods are defined within the context of an object or class.
4. Invocation: Methods are called on an object.

## Module 3 (using-javascript-in-the-web-browser)

<------------------------------------------------------------------>
