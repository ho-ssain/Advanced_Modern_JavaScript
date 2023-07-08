// Asynchronous Programming...........

console.log("I");

console.log("eat");

setTimeout(() => {
  console.log("ice-cream");
}, 4000);
// What does setTimeout do?
// It takes a function as an argument and executes it after a certain amount of time.

console.log("with a ");

console.log("spoon");

/**

| Main Lane |         |         |
| 1.        |         |         |  
| 2.        |         |         |
| 3. --->   |-------> |         |
| 4.        |         |         |
| 5.        |         |         |
| 6. <---   |<------- |         |


 */
