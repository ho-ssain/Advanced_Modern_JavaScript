/* 
var colors = ["red", "green", "blue", "yellow", "purple", "orange"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
 */

/* 
let food = ["grapes", "cheese", "bread", "egg"];
for (const eachFood of food) {
  console.log(eachFood);
}
 */
/* 
let myName = "Hello, Hossain Kabir";
for (let i = 0; i < myName.length; i++) {
  console.log(myName[i]);
}
 */

let count = 0;
let text = "";

while (count <= 10) {
  count++;
  text += `The incrementor has gone up to ${count * 5}\n`;
}

console.log(text);
