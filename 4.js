//> What is Scope?
//-> In JS, a scope refers to the context in which variables, functions, and objects are defined and can be accessed. It determines the visibility and lifetime of these entities.

//> global scope-:
/*
* global scope is the outmost scope in Js.

* variables declared in the global scope are accessible throughout the entire code.

* global scope variables can be accessed from any part of the program, including functions, blocks, and nested scopes.

* global scope variables have a lifetime as long as the program is running.

*. global variables can potentially lead to naming conflicts and unintended modifications
*/

//> local scope-:
/*
*. local scope is created when functions or blocks of code are defiend.

*. variables declared in local scope are only accessible within the scope they are defined in and it's nested sscopes.

*. local scope variables have a limited lifetime and are destroyed once the scope is exited.

*. local variables help encapsulate data and prevent naming conflicts between different scopes.
*/

//> block scope-:
/**
*. Block scope was introduced in ES6 with the let and const keywords.

*. Block scope refers to variables scoped to a specific block of code, typically denoted by curly braces {}.

*. Variables declared with let and const have block scope and are limited to the block they are defined in and any nested blocks.

*. Block scope allows for finer-grained scoping within code blocks and helps prevent variable leaks and conflicts.
 */

//> function scope-:
/**
*. Function scope is the scope created by functions.

*. Variables declared within a function are accessible only within that function and any nested functions.

*. Function scope variables have a lifetime as long as the function is executing, and they are destroyed once the function completes.

*. Function scope helps encapsulate variables and promotes data privacy by restricting their accessibility.
 */
