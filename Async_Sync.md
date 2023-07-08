# Asyncronous vs Synchronous

## Synchronous

Synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing.

Synchronous tasks are done in a single Thread.
Example Scenario:-
    You are in a queue to buy a ticket. You cannot buy a ticket until everyone in front of you has bought theirs, and you cannot leave until everyone behind you has bought their tickets. Everything happens in a single line. This is synchronous.

## Asynchronous

Asynchronous code doesn’t have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user.

Asynchronous processing is done in parallel.
Tasks are not dependent on others and can be executed at the same time as a main process.

Each Asynchronous tasks is done in a different Thread that reports back to the main thread with the result when complete.

All the tasks in Asynchronous report back the result when they are done.

Example Scenario:-
    You are in a queue to buy a ticket. You cannot buy a ticket until everyone in front of you has bought theirs, but you can leave without waiting for everyone if they are taking too long. This is asynchronous. You can do other things while you wait.

Is JavaScript Synchronous or Asynchronous?
--> JavaScript is a synchronous programming language, but it is also a single-threaded language. This means it has one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next.

But we can use Asynchronous code in JavaScript by using the following methods:-

1. Callbacks
2. Promises
3. Async/Await
4. Event Loop
5. Web Workers
6. setTimeout() and setInterval()
7. XMLHttpRequest, fetch(), and Axios
