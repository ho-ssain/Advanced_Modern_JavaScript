let foods = ["fruits", "drinks", "biscuits", "candy"];
let name = prompt("What is your name?");

function hello(name) {
  return `Hello ${name}, Welcome to our shop!`;
}

function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function hospitality(name, foods) {
  if (name) {
    console.log(hello(name));

    console.log(
      `${name}, would you like to some ${
        foods[randomInt(0, foods.length - 1)]
      }?`
    );
  } else {
    console.log(`You didn't give me your name!`);
  }
}

hospitality(name, foods);
