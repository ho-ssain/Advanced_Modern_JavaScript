//> Clone array, concat, spread operator

// In JavaScript, there are several ways to clone an array, and two commonly used methods are concat() and the spread operator (...). These methods create a new array that is a copy of the original array. Let's explore each method:

let originalArray = [1, 2, 3];
let cloneArray = originalArray.concat();
console.log(cloneArray);

// The spread operator is a modern feature introduced in ECMAScript 2015 (ES6). It allows you to "spread" elements from an array or an iterable object (like a string) into a new array. When used with an array, it effectively clones the array.

let arr1 = ["one", "two", "three"];
let cloneA = [...arr1];
console.log(cloneA);

// Both the concat() method and the spread operator create a shallow copy of the array. This means that if the array contains objects or other arrays, the cloned array will still reference the same objects and arrays in memory. If you modify the elements within these objects or arrays, it will affect both the original and cloned arrays.

let arr2 = [[1, 2, 3], { name: "hasan", age: 24 }];
let cloneA2 = [...arr2];

cloneA2[0].pop();
console.log(cloneA2);
console.log(arr2);
