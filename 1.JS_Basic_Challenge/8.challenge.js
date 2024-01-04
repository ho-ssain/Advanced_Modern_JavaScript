let number = prompt("Enter a Whole Number?", 1);

if (number < 10) {
  console.log("You entered a number smaller than 10!");
  for (let i = 0; i < 10; i++) {
    if (i == number) {
      console.log(`Here is a ${i} <-- this is your number`);
    } else {
      console.log(`Here is a ${i}`);
    }
  }
} else if (number > 9) {
  console.log("You entered a big number!");
} else {
  console.log("There was an error!");
}
