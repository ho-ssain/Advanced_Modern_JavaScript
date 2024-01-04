let foods = ["fruits", "drinks", "biscuits", "candy"];
let name = prompt("What is your name?");

function hello(name) {
  return `Hello ${name}, Welcome to our shop!`;
}

function hospitality(name, foods) {
  if (name) {
    console.log(hello(name));
    for (const food of foods) {
      console.log(`${name}, would you like to some ${food}?`);
    }
  } else {
    console.log(`You didn't give me your name!`);
  }
}

hospitality(name, foods);
