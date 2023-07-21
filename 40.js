// map method
// The map method is another built-in array method in JavaScript, similar to the forEach method, that allows you to iterate over the elements of an array. However, the key difference is that the map method creates a new array containing the results of applying a provided callback function to each element of the original array, without modifying the original array.

const numbers = [1, 2, 3, 4, 5];
const arr = [];

// const len = numbers.map((num) => arr.push(num * num))

const p = numbers.map((n, i, a) => {
  console.log(a);
  return n * n;
});
