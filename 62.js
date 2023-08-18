// Prototype in JavaScript: it’s quirky, but here’s how it works

// 'prototype' is property of a function(which i again a special object) which refers a object

// In JavaScript, the term "prototype" refers to an object that serves as a blueprint for other objects. Every object in JavaScript has a prototype, which acts as a template from which the object inherits properties and methods. The prototype provides a way to share behavior and characteristics among multiple objects, creating a form of inheritance.

// Certainly! Here's a simplified definition and example for both "prototype" and `[[Prototype]]`:

// **Prototype:**
// - **Definition:** Prototype is a blueprint for creating objects in JavaScript. It defines the shared properties and methods that objects created from a constructor function will inherit.
// - **Example:** In the constructor function `Person`, the `prototype` property defines the `sayHello` method that all instances of `Person` will share.

// ```javascript
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayHello = function() {
//   console.log(`Hello, my name is ${this.name}`);
// };

// const person1 = new Person("Alice");
// person1.sayHello(); // Output: "Hello, my name is Alice"
// ```

// **`[[Prototype]]`:**
// - **Definition:** `[[Prototype]]` is an internal property in JavaScript objects that establishes the link to the prototype from which the object inherits properties and methods.
// - **Example:** In the prototype chain of `person1`, `person1.__proto__` or `Object.getPrototypeOf(person1)` points to the prototype object `Person.prototype`.

// ```javascript
// console.log(person1.__proto__ === Person.prototype); // Output: true
// console.log(Object.getPrototypeOf(person1) === Person.prototype); // Output: true
// ```

// Using these simple explanations and examples, you can quickly convey the concepts of "prototype" and `[[Prototype]]` during interviews. Remember that these concepts are fundamental to how JavaScript handles inheritance and object-oriented programming.

function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;

  return person;
}

Person.prototype = {
  eat: function () {
    console.log("Person is eating!");
  },
  sleep: function () {
    console.log("Person is sleeping");
  },
  play: function () {
    console.log("Person is playing");
  },
};

const Hossain = Person("Hossain", 26);

function PersonNew(name, age) {
  this.name = name;
  this.age = age;
}

const Hasan = new PersonNew("Hasan", 18);
