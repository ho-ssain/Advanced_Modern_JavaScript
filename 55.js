// call, apply, bind methods
// In JavaScript, the `call`, `apply`, and `bind` are methods that allow you to explicitly set the value of `this` for a function. These methods are particularly useful when you want to control the context in which a function is called or when you need to borrow a method from one object and use it in another.

// 1. **`call`:**
//    - The `call` method is a function method that allows you to call a function and explicitly set the value of `this` for that function.
//    - The first argument passed to the `call` method becomes the value of `this` inside the function, and you can pass additional arguments as comma-separated values.
//    - `call` is used for functions that expect individual arguments.

// Example:

const person1 = {
  name: "Alice",
  sayHello: function (greeting) {
    console.log(greeting + ", my name is " + this.name);
  },
};

const anotherPerson1 = {
  name: "Bob",
};

person1.sayHello.call(anotherPerson1, "Hi"); // Output: "Hi, my name is Bob"

// In this example, `call` is used to call the `sayHello` method on the `person` object with `anotherPerson` as the value of `this`. The `"Hi"` argument is passed to the `sayHello` method as the `greeting` parameter.

// 2. **`apply`:**
//    - The `apply` method is similar to `call`, but instead of passing arguments as individual values, it expects an array of arguments to be passed.
//    - `apply` is used for functions that expect an array of arguments.

// Example:

const person2 = {
  name: "Alice",
  sayHello: function (greeting) {
    console.log(greeting + ", my name is " + this.name);
  },
};

const anotherPerson2 = {
  name: "Bob",
};

person2.sayHello.apply(anotherPerson2, ["Hi"]); // Output: "Hi, my name is Bob"

// In this example, `apply` is used to call the `sayHello` method on the `person` object with `anotherPerson` as the value of `this`. The `["Hi"]` array contains the argument passed to the `sayHello` method as the `greeting` parameter.

// 3. **`bind`:**
//    - The `bind` method creates a new function with the same code as the original function but with a fixed value for `this`.
//    - Unlike `call` and `apply`, `bind` does not immediately call the function but returns a new function with the fixed `this` value, which you can call later.
//    - `bind` is useful when you want to create a new function with a specific context that can be invoked later.

// Example:

const person3 = {
  name: "Alice",
  sayHello: function (greeting) {
    console.log(greeting + ", my name is " + this.name);
  },
};

const anotherPerson3 = {
  name: "Bob",
};

const sayHelloToBob = person3.sayHello.bind(anotherPerson3, "Hello");
sayHelloToBob(); // Output: "Hello, my name is Bob"

// In this example, `bind` is used to create a new function `sayHelloToBob`, which has `anotherPerson` as the fixed value of `this` and `"Hello"` as the fixed value of the `greeting` parameter. When `sayHelloToBob()` is called, it logs "Hello, my name is Bob".

// The `call`, `apply`, and `bind` methods are powerful tools for controlling the value of `this` in JavaScript functions. They are commonly used in scenarios where you need to reuse functions with different contexts, borrow methods from one object to use in another, or create new functions with specific contexts for later use.
