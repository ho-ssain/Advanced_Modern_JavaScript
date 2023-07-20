//> Intro to objects
// arrays are good but not sufficient for real world data
// an object is a complex data type that allows you to represent and store collections of key-value pairs. It is one of the fundamental data structures in the language and is used extensively to organize and manage data. Objects are versatile and can hold various types of data, including primitive data types, arrays, functions, and even other objects, making them a powerful tool for creating complex data structures.
// objects don't have index
// object is a reference type

const person = {
  name: "Hossain",
  age: 25,
  city: "Dhaka",
  Country: "Bangladesh",
  hobbies: ["sleeping", "music", "reading"],
};

console.log(person.name);
person.hobbies.forEach((e) => console.log(e));

person.gender = "male";
console.log(person);

// bracket notation
console.log(person["age"]);
