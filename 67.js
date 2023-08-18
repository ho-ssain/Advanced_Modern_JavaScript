// How javascript works overview
console.log(this);
console.log(window);
console.log(f_name);
var f_name = "Hossain";

// Sure, let's dive deeper into how JavaScript code works internally. When you write JavaScript code and run it in a web browser, there are several steps involved in its execution:
/*
Compilation Phase-:
  1. Tokenization and Lexing:
      i-> The JavaScript engine breaks down your code into    individual pieces called tokens. This process is known as tokenization.

      ii-> Lexing (or lexical analysis) involves categorizing these tokens into meaningful parts like keywords, variables, operators, etc
      
  2. Parsing:
      i-> The engine takes the stream of tokens and creates a tree-like structure called the Abstract Syntax Tree (AST).

      ii-> The AST represents the syntactic structure of your code.
      
      iii-> Syntax and Grammar Checking:
      During parsing, the JavaScript engine checks whether the code adheres to the language's syntax rules and grammar.
      If there are syntax errors (e.g., missing semicolons, incorrect variable names), the engine can identify and report them during this step.
      
      iv-> Scope Determination:
      While building the AST, the parser also determines the scope of variables and functions.
      This is essential for understanding the context in which variables are used and how they interact with other parts of the code.
      Variables are added to their respective scope environments during this phase.

  3. Compilation and Code Generation:
      i-> Some modern JavaScript engines use a Just-In-Time (JIT) compiler. This compiler translates the AST into optimized machine code that the computer's processor can execute.

      ii-> The engine also performs various optimizations during this stage to improve code performance.

Execution Phase-:
  4. Execution Context Creation:
    An execution context is a wrapper that helps manage the code's variables, scope, and this reference during execution.
    The engine executes the compiled code line by line, following the execution context.
    For each function call or block, a new execution context is created
    The first execution context is //! Global execution context.
      a. Variable Assignment:
      Variables are assigned values as they are encountered in the code.
      Functions are assigned to their declared variables.

      c. Function Invocation:
      When a function is called, a new execution context is created for that function call.
      The function's code is executed, and its local variables are stored in its own execution context.

*/
