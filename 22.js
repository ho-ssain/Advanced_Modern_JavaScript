//> Primitive vs reference data types
/**

The key difference between primitive and reference data types is how they are stored and accessed:

--> Primitive types are stored directly in memory as the actual value. When you assign a primitive value to a variable or pass it as an argument to a function, a copy of that value is created.

--> Reference types are stored as a reference to the location in memory where the actual value is stored. When you assign a reference value to a variable or pass it as an argument to a function, a reference to the original value is created.


 */
let num1 = 10;
let num2 = num1;
console.log(`value of num1 is ${num1}`);
console.log(`value of num2 is ${num2}`);

num1++;

console.log(`value of num1 is ${num1}`);
console.log(`value of num2 is ${num2}`);

// reference type
console.log("....Reference Type....");

let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(`value of arr1 is ${arr1}`);
console.log(`value of arr2 is ${arr2}`);

arr1.push(4);

console.log(`value of arr1 is ${arr1}`);
console.log(`value of arr2 is ${arr2}`);
