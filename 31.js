//> Object destructuring

// Object destructuring is a feature in JavaScript that allows you to extract properties from objects and assign them to variables in a more concise and convenient way. It simplifies the process of accessing object properties and reduces the need for repetitive syntax. Object destructuring is especially useful when you want to work with specific properties from an object without needing to access the entire object each time.

// Here's how object destructuring works:

// You define an object with properties that you want to destructure.
// On the left side of the assignment, you use curly braces {} with variable names that correspond to the property names in the object.
// The variables on the left side are assigned the values of the corresponding properties from the object.

// Example 1: Basic Object Destructuring

const person = {
  n: "kabir",
  age: 25,
  city: "Cumilla",
  gender: "male",
};

let { n, age } = person;

// Renaming Variables
let { gender: personGender } = person;

// Default Values
let { code = 123 } = person;

// Function Parameter Destructuring:
function printPersonInfo({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

let person2 = {
  name: "Hossain",
  age: 25,
};

// Nested Object Destructuring:
let person3 = {
  name: "Hossain",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
  likes: {
    books: ["book1", "book2"],
    music: ["mu-1", "mu-2", "mu-3"],
  },
};

let {
  name,
  address: { city, country },
  likes: {
    books: [b1, b2],
  },
} = person3;
// console.log(city, country, b1, b2)

// Rest Pattern in Destructuring:
let person4 = {
  p_name: "Hossain",
  p_age: 25,
  city: "Dhaka",
  country: "Ban",
};

let { p_name, p_age, ...address } = person4;

// Destructuring and Swapping Variables:
let a = 10;
let b = 20;

[a, b] = [b, a];

// Destructuring Arrays of Objects:
let people = [
  { name: "Hossain", age: 25 },
  { name: "Hasan", age: 35 },
];

for (let { name, age } of people) {
  console.log(`Name: ${name}, Age: ${age}`);
}

// Destructuring from a Returned Object:

function getPerson() {
  return {
    h_name: "hk",
    h_age: 25,
    h_city: "Cumilla",
  };
}
let { h_name, h_age } = getPerson();
