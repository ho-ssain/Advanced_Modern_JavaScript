function hello(name) {
  if (name) {
    console.log(`Hello, ${name}. Welcome to Our World!`);
  } else {
    console.log("You didn't give me your name!");
  }
}

let name = prompt("Enter your name, please?");
hello(name);
