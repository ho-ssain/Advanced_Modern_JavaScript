// Recursion in Js

// What is Recursion?

// Recursion is a programming technique that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task.

// Recursion is a process of calling itself. A function that calls itself is called a recursive function.

/**
there are two ways to solve a problem
iterative approach
--: 1. for loop
--: 2. while loop
--: 3. do while loop

recursive approach
--: 1. function calling itself
A recursive function is built up of two parts:
1. base case/stopper: 
  --> the case where the function does not call itself
2. recursive case: 
  --> the case where the function calls itself again and again until it reaches the base case 

 */

// 1. Power of a number using recursion
function Pow(base, power) {
  if (power === 1) return base;
  else return base * Pow(base, power - 1);
}
// console.log(Pow(2, 10))

// 2. Factorial of a number using recursion
/*
What is factorial? How is it calculated?
Factorial of a number is the product of all the integers from 1 to that number.
For example, the factorial of 6 is 1*2*3*4*5*6 = 720.
Factorial is not defined for negative numbers and the factorial of zero is one, 0! = 1.
*/
function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}
// console.log(factorial(6)); // 720

// 3. ( Fibonacci series using recursion) Find the nth number in the fibonacci series
/**
What is Fibonacci series?
In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
The beginning of the sequence is thus: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
 */

function fibonacci(n) {
  if (n < 2) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(8)); // 21

/**

A recursive solution is usually shorter than an iterative one. Recursion depth means the number of nested calls. The maximal recursion depth is limited by JavaScript engine. We can rely on it being 10000, some engines allow more, but 100000 is probably out of limit for the majority of them.



Execution context stack:
How recursive calls work?
When a function makes a nested call, the following happens:
1. The current function is paused.
2. The execution context associated with it is remembered in a special data structure called execution context stack.
3. The nested call executes.
4. After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped.


What is the execution context?
The execution context is an internal data structure that contains details about the execution of a function: where the control flow is now, the current variables, the value of this, etc.

What is stack in programming?
A stack is a data structure that stores items in an Last-In/First-Out manner. This means that the last item to be added to the stack will be the first item to be removed. A stack is a container of objects that are inserted and removed according to the last-in first-out (LIFO) principle.
 */
