//> undefined null bigint

// undefined:
// undefined is a primitive value that is automatically assigned to variables that have been declared but not assigned a value.
// It represents the absence of a value or an uninitialized variable.

let variable;
console.log(variable); // Output: undefined

// null:
// null is a special value that represents the intentional absence of an object value.
// It is often used to indicate the absence of a meaningful value.

let person = null;
console.log(person);

// BigInt:
// BigInt is a numeric primitive data type introduced in ES2020, designed to represent integers of arbitrary length.
// It allows for working with numbers beyond the normal numeric range supported by the Number type.
// BigInt values are created by appending n or using the BigInt() constructor.

let bigNum = 12345678998765432134567n;
console.log(bigNum);

//3 It's important to note that undefined, null, and BigInt have distinct purposes:

//3 undefined is used when a variable has been declared but has no value assigned or has not been initialized yet.

//3 null is used to explicitly indicate the absence of an object value.

//3 BigInt is used to represent integers beyond the range supported by the Number type.
