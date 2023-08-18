// Create your own methods

// What is a method?
// A method is a function that is a property of an object

const person = {
  name: "John",
  age: 20,
  greet: function (g) {
    console.log("Hello! " + g);
  },
  about() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  },
};

person.greet("How are you?");
person.about();
