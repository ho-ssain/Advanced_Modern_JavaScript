/* let myString = "I am really hungry for some food";
console.log(myString);

let myUpperString = myString.toUpperCase();
console.log(myUpperString);

let findLoc = myString.search("really");
console.log(findLoc);

let word = myString.substring(findLoc, 11);
console.log(word);

word = word.toUpperCase();
let newString = myString.replace("really", word);
console.log(newString);
 */

let foods = ["milk", "banana", "bread", "egg"];
let myString = "I am really hungry for some";
/* 
for (const food of foods) {
  console.log(`${myString} ${food}`);
}
 */

for (let i = 0; i < foods.length; i++) {
  // checking if the index is even or odd
  if (i % 2 === 0) {
    console.log(`${myString} ${foods[i].toUpperCase()}`);
  } else {
    console.log(`${myString} ${foods[i]}`);
  }
}
