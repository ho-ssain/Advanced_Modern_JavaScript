// CallBack Example

/**

What actually a callback is?
--> In simple words when you call a function and pass another function as an argument to it, then the passed function is called a callback function.

What is the purpose of a callback function?
--> so what callback do is that it froms connection between two or more functions.

 */

function one(call_two) {
  console.log("Step 1");
  call_two();
}

function two() {
  console.log("Step 2");
}

one(two);
