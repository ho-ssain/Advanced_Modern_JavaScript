//> Switch statement
// The switch statement in JavaScript provides a way to select one of many code blocks to be executed based on the value of an expression. It's an alternative to using multiple if...else if...else statements when you have a series of conditions to evaluate. The switch statement has the following syntax:

let day = 13;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saterday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "InValid Day!";
}
console.log(dayName);

// Switch statements are useful when you have multiple cases to evaluate based on the value of a single expression. They provide a more concise and readable way to handle such scenarios. However, it's important to remember to use the break statement after each case to prevent fall-through behavior, where execution continues to the next case even if the current case matches.
