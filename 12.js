//> truthy and falsy values

// In JavaScript, truthy and falsy values are used to determine the truthiness or falsiness of an expression or value. The concept of truthiness and falsiness is based on the idea that certain values are inherently considered true or false in a boolean context.

// Falsy values:
/*
The following values are considered falsy, meaning they are treated as false in a boolean context:

  (1) false: The boolean value false.
  (2) 0: The number zero.
  (3) '': An empty string.
  (4) null: Represents the absence of any object value.
  (5) undefined: Represents an uninitialized or unassigned value of a variable.
  (6) NaN: Stands for "Not-a-Number" and represents an invalid number.

*/

if (false || 0 || "" || null || undefined || NaN) {
  console.log("This will not be executed!");
} else {
  console.log("All values are falsy");
}

// Truthy values:
/*
Any value that is not falsy is considered truthy, meaning it is treated as true in a boolean context. This includes values such as:

    true: The boolean value true.
    Non-zero numbers: Any non-zero numeric value, positive or negative.
    Non-empty strings: Any string with at least one character.
    Objects and arrays: Any non-null object or array.
    Functions: Any non-null function object.
*/

if (true || 40 || "Hello" || [1, 2, 3] || { name: "John" } || function () {}) {
  console.log("All values are truthy.");
} else {
  console.log("This will not be executed.");
}
// Output: 'All values are truthy.'
