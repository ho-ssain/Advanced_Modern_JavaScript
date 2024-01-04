let pickColor = prompt("pick a color: ", "");
pickColor = pickColor.toLowerCase();

if (pickColor === "red" || pickColor === "green" || pickColor == "blue") {
  console.log(`You picked a primary color: ${pickColor}`);
} else if (
  pickColor === "yellow" ||
  pickColor === "orange" ||
  pickColor == "purple"
) {
  console.log(`You picked a secondary color: ${pickColor}`);
} else {
  console.log("Other Colors!");
}

// better way......
/* 
const primaryColor = ["red", "green", "blue"];
const secondaryColor = ["orange", "yellow", "purple"];

let pickColor = prompt("Pick a color: ", "");

if (primaryColor.includes(pickColor.toLowerCase())) {
  console.log(`You picked a primary color: ${pickColor}`);
} else if (secondaryColor.includes(pickColor.toLowerCase())) {
  console.log(`You picked a secondary color: ${pickColor}`);
} else {
  console.log("No color / other colors!");
}
 */
