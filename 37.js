// Lexical Scope
// Lexical scope, also known as static scope, is a fundamental concept in programming languages, including JavaScript. It defines how the scope of variables and functions is determined based on the physical placement of the code in the source code file during the compilation phase, rather than the runtime execution. Lexical scope is essential for understanding how variable lookup and scoping work in JavaScript.

// In lexical scope, the scope of a variable or function is determined by its position within the source code's nested blocks, such as functions or code blocks (enclosed within curly braces). When a variable or function is defined, it becomes part of the lexical environment associated with the block where it is declared.

// Let's look at some key characteristics of lexical scope:

// 1. ** Variable Lookup:**
//  When a variable is referenced within a block of code, JavaScript searches for that variable within the current block's lexical environment. If the variable is not found, it will search in the next outer block, and so on, until the global scope is reached. This process is called variable lookup or scope chain traversal.

// 2. ** Lexical Hierarchy:**
//  Lexical scope follows a hierarchical structure based on how functions and blocks are nested within each other. Inner blocks have access to variables in their parent blocks, but parent blocks cannot access variables defined in their child blocks.

// 3. ** Function Scope:**
//  In JavaScript, functions create a new scope. Variables declared within a function are accessible only within that function's scope and are not visible outside of it. This concept is known as function scope.

//>4. ** Closures:**
//  Lexical scope is a key feature that enables closures in JavaScript. A closure occurs when a function defined inside another function retains access to its parent function's variables even after the parent function has finished executing. Closures are created due to the preservation of the lexical environment, allowing functions to "remember" the variables in their outer scopes.

// Let's see an example to illustrate lexical scope:

function outer() {
  const outerVar = "I'm from outer function";

  function inner() {
    const innerVar = "I'm from inner function";
    console.log(outerVar); // Inner function can access outerVar
    console.log(innerVar); // Inner function can access innerVar
  }

  inner();
  // console.log(innerVar); // ReferenceError: innerVar is not defined
}

outer();

// In this example, the `inner` function has access to the variables `outerVar` declared in its parent function `outer`. However, `outer` cannot access `innerVar`, as it is defined inside `inner` and is not part of the outer function's lexical environment.

// Lexical scope plays a crucial role in how JavaScript manages the visibility and lifetime of variables and functions. Understanding lexical scope helps developers write clean and maintainable code by organizing variables and functions in a structured manner, and it also forms the foundation for the behavior of closures in JavaScript.
