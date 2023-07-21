//> callback function
// In JavaScript, a callback function is a function that is passed as an argument to another function and is executed later, usually after the completion of some asynchronous operation or when a specific event occurs. Callback functions are a fundamental concept in asynchronous programming and are widely used in JavaScript to handle asynchronous operations, event handling, and more.

// The primary purpose of using callback functions is to ensure that certain code executes only when a particular operation is completed or when a specific event occurs, without blocking the execution of other code.

// Let's look at some key aspects of callback functions:

// 1. **Passing Functions as Arguments:**
//    In JavaScript, functions are first-class citizens, meaning they can be treated as values and passed as arguments to other functions. Callback functions are usually passed as arguments to higher-order functions, which are functions that take other functions as parameters.

// 2. **Handling Asynchronous Operations:**
//    Asynchronous operations, such as making HTTP requests, reading files, or executing timers, do not block the execution of code. Instead, they are executed separately, and the result is made available at a later time. Callback functions are used to handle the results of these asynchronous operations when they are available.

// 3. **Event Handling:**
//    Callback functions are commonly used in event-driven programming. When an event (e.g., a button click, mouse movement, or a keyboard press) occurs, the corresponding callback function is invoked to handle the event and perform the necessary actions.

// 4. **Error Handling:**
//    Callback functions are also used to handle errors that might occur during an operation. By convention, the first argument of a callback function is often reserved for an error object, allowing you to handle errors gracefully.

// Example: Using a callback to handle asynchronous operation (setTimeout):

function delayedGreeting(name, callback) {
  setTimeout(() => {
    const greeting = `Hello, ${name}!`;
    callback(greeting);
  }, 2000); // Delay of 2 seconds
}

function displayGreeting(message) {
  console.log(message);
}

delayedGreeting("Alice", displayGreeting);
// Output (after 2 seconds): "Hello, Alice!"

// In this example, the `delayedGreeting` function takes a `name` and a `callback` function as arguments. It simulates an asynchronous operation using `setTimeout` to delay the execution by 2 seconds. After the delay, it invokes the `callback` function, passing the generated greeting message.

// Callback functions are a crucial part of JavaScript's event-driven and asynchronous nature. They allow developers to write non-blocking code, handle events, manage asynchronous operations, and structure code effectively. However, as more asynchronous operations are nested with callbacks, it can lead to callback hell, which can be mitigated using modern techniques like Promises, async/await, or using functional programming paradigms like functional composition and higher-order functions.
