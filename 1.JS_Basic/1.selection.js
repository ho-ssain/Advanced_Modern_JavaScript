let red = true;
let blue = false;
let green; // undefined, it's a falsy value
let myNum = 5;
let otherNum = 5;
let notNum = "5rt";
let myValue = notNum - myNum;
/* 
if (myValue) {
  console.log("The statement is true!");
} else {
  console.log("The statement is false!");
  console.log(myValue);
}
 */

let colors = ["red", "green", "blue", "yellow"];
let selectedColor = colors[0];
/* 
if (selectedColor === "red") console.log("The color is red!");
else if (selectedColor === "green") console.log("The color is green!");
else if (selectedColor === "blue") console.log("The color is blue!");
else console.log("The color is yellow!");
 */

/* 
switch (selectedColor) {
  case "red":
    console.log("The color is red!");
    break;
  case "green":
    console.log("The color is green!");
    break;
  case "blue":
    console.log("The color is blue!");
    break;
  case "yellow":
    console.log("The color is yellow!");
    break;
  default:
    console.log("No Color!");
}
 */
/* 
let goodMood = true;
let gotSleep = true;

if (goodMood && gotSleep) {
  console.log("Today is a good Day!");
} else {
  console.log("I am grumpy!");
}
 */

let gotBreakfast = true;
let gotLunch = true;
let gotDinner = false;

if (gotBreakfast || gotLunch || gotDinner) {
  console.log("I am not starving!");
} else {
  console.log("STARVING!!");
}
