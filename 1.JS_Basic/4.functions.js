function doStuff() {
  let myString = "Here is a string of text.";
  let upperString = myString.toUpperCase();
  console.log(myString);
  console.log(upperString);
}

// doStuff(); // invoke/call/run

function upperMessage(message) {
  let upperMessage = message.toUpperCase();
  console.log(upperMessage);
}

// upperMessage("Hello, What's Up!");

function addNumbers(number1, number2) {
  let sum = number1 + number2;
  console.log(sum);
}

// addNumbers(23, 44);

function returnSum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// console.log(returnSum(21, 39));

// let randomNum = Math.random();
// console.log(randomNum);

/* 
let foods = ["cheese", "chicken", "grapes", "hamburgers"];

function randomInt(min, max) {
  // creating a random integer from min and max.
  return min + Math.floor((max - min + 1) * Math.random());
}

console.log(foods[randomInt(0, 3)]);
 */

let greeting = function () {
  console.log("Hi, Hossain!");
};

greeting();
