/*
> Booleans and comparison Operators:
Booleans are a fundamental data type in JavaScript that represent logical values. A boolean can have one of two possible values: true or false. Booleans are commonly used for making decisions and controlling the flow of code.

Comparison operators are used to compare values and return a boolean result based on the comparison. They allow you to compare different values and determine their relationship or equality.

Here are the comparison operators in JavaScript:
*/

//> Equality Operators:
/*
  == (loose equality): Checks if two values are equal after performing type coercion.
  === (strict equality): Checks if two values are equal without performing type coercion.
*/

let num1 = 5;
let num2 = "5";

console.log(num1 == num2); // true
console.log(num1 === num2); // false
/*
In the example above, the == operator performs loose equality comparison between num1 and num2. Since it performs type coercion, the string '5' is coerced to a number before the comparison, resulting in equality. On the other hand, the === operator performs strict equality comparison without type coercion, considering the two values as different types and returning false.
 */

//> Inequality Operators:
/*
  / != (loose inequality): Checks if two values are not equal after performing type coercion.
  / (!== (strict inequality): Checks if two values are not equal without performing type coercion.
*/

let num3 = 5;
let num4 = "d";
console.log(num3 != num4); // false
console.log(num3 !== num4); // true

/**
In this example, the != operator performs loose inequality comparison. Since it performs type coercion, the string '5' is coerced to a number before the comparison, resulting in equality. However, the !== operator performs strict inequality comparison without type coercion and returns true because the values are of different types.
 */

// Other Comparison Operators:
/*
  /1. < (less than): Checks if the left value is less than the right value.
  
  /2. > (greater than): Checks if the left value is greater than the right value.
  
  /3. <= (less than or equal to): Checks if the left value is less than or equal to the right value.
  
  /4. >= (greater than or equal to): Checks if the left value is greater than or equal to the right value.
*/

console.log(num1 < num2); // Output: false
console.log(num1 > num2); // Output: false
console.log(num1 <= num2); // Output: true
console.log(num1 >= num2); // Output: true
