#

---

## Module 1

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

---

## Module 2
