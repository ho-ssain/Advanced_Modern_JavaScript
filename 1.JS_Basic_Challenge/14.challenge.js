function hello(name) {
  if (name) {
    return `Hello, ${name}. Welcome!`;
  } else {
    return `You didn't give me your name!`;
  }
}

let name = prompt("Enter name: ");
console.log(hello(name));
