//> Loops Examples

//while loop

let n = 10;
let sum = 0;
let i = 1;
while (i <= n) {
  sum += i;
  i++;
}
console.log(sum);

// for loop
let add = 0;
for (let i = 1; i <= 100; i++) {
  add += i;
}
console.log(add);

// do...while loop
// Example: User Input Validation

let userInput;
do {
  userInput = prompt("Enter a positive number:");
} while (isNaN(userInput) || Number(userInput) <= 0);
console.log("Valid input", userInput);
/**
In this example, the do...while loop is used to validate user input until a positive number is entered. Here's how it works:

      The loop starts by executing the code block within the do statement, which prompts the user to enter a number.
      
      The input is stored in the userInput variable.
      
      The condition within the while statement is then evaluated.
          isNaN(userInput) checks if the input is not a valid number.
          Number(userInput) <= 0 checks if the input is less than or equal to zero.
      
      If either of the conditions is true, indicating invalid input, the loop continues and prompts the user to enter a number again.
      
      The loop repeats until the condition becomes false, meaning a valid positive number has been entered.
      
      Once a valid input is received, the loop exits, and the program proceeds to the next line, printing the valid input to the console.
 */
