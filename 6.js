// async and await
// What is async and await? Explain in detail using example.
// Answer: async and await are extensions of promises. async makes a function return a Promise. await makes a function wait for a Promise.
// async and await are built on top of promises. It cannot be used with plain callbacks or node callbacks.
// async makes a function return a Promise. Even if a function returns a non-promise value, async will wrap it in a promise.
// await makes a function wait for a Promise. It can only be used inside an async function.
// async/await is just syntax sugar over promises. It doesn't introduce any new functionality in the language.

const stocks = {
  fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanutts"],
};

const is_shop_open = true;

const order = async () => {
  try {
    await abc;
  } catch (error) {
    console.log("error!");
  } finally {
    console.log("Thank You!");
  }
};

// order()
//   .then(() => console.log("Hello 1!"))
//   .then(() => console.log("Hello 2!"));
// Explain the order() function call and how then works?
// Answer: The order() function is called and it returns a promise. The then() method is called on the promise returned by the order() function. The then() method takes a callback function as an argument. The callback function is called when the promise is resolved. The then() method returns a promise. The then() method is called on the promise returned by the then() method.

//await
// await makes a function wait for a Promise. It can only be used inside an async function.

function toppings_choice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Which topping he would like?"));
    }, 3000);
  });
}

async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("C");
  await toppings_choice();
  console.log("D");
  console.log("E");
}

kitchen();

console.log("Doing the dishes.");
console.log("Cleaning the tables.");
console.log("Taking Orders from different customers..");
