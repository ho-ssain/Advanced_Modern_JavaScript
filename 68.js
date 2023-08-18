// A closure in JavaScript is a function that "closes over" its lexical scope, preserving access to variables and functions even after the outer function has finished executing. It encapsulates both the function and the environment in which it was created.

// In simpler terms, a closure allows a function to remember the variables and parameters of the context in which it was created, even when that function is invoked outside of that context.

// Example:

function outer() {
  const outerVar = "I'm from outer!";

  function inner() {
    console.log(outerVar); // inner() "closes over" outerVar
  }

  return inner; // Returns the inner function, creating a closure
}

const myClosure = outer(); // myClosure is now a closure
myClosure(); // Outputs: "I'm from outer!"

// In this example, `inner()` is a closure because it retains access to the `outerVar` variable even after `outer()` has finished executing. When `myClosure()` is called, it can still access `outerVar` due to the closure's preserved environment.

// Closures are a powerful concept in JavaScript, often used for data encapsulation, maintaining private variables, and creating functions with persistent state. They enable more advanced programming techniques and play a crucial role in functional programming and callback patterns.
