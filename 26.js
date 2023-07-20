// difference between dot and bracket notation.
const key = "email";
// ES6 introduced computed property names, which allow you to use expressions as property names when defining objects.

const person = {
  name: "Hossain",
  age: 25,
  "person hobbies": ["music", "game", "sleep"],
  [key]: "awarehossain@gmail.com",
};

console.log(person["person hobbies"]);

// person[key] = "awarehossain@gmail.com"

console.log(person.email);
