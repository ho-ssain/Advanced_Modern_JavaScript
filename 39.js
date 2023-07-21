// forEach method

// The forEach method is a built-in array method in JavaScript that allows you to iterate over the elements of an array and execute a callback function for each element. It provides a simple and concise way to perform an operation on each element of the array without the need for explicit looping.

/*
array.forEach(callback(currentValue, index, array) {
  Function body (code to be executed for each element)
});
  array: The array on which the forEach method is called.
  
  callback: A function that is called for each element of the array.
  
  currentValue: The current element being processed in the array.

  index (optional): The index of the current element being processed.

  array (optional): The array on which the forEach method was called.
*/
let numbers = [1, 2, 3, 4, 5];
const squareNum = [];

numbers.forEach((n) => squareNum.push(n * n));
// console.log(squareNum)

const Users = [
  { first_name: "Hossain", age: 25 },
  { first_name: "Hasan", age: 18 },
  { first_name: "Shohan", age: 16 },
];

Users.forEach((user) =>
  console.log(`${user.first_name} is ${user.age} years old.`)
);
