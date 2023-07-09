// Making the ice-cream using async/await.
/*******************
                      Time(Seconds)
1>- Place the order      --> 2
2>- Cut the fruit        --> 2
3>- Add water and ice    --> 1
4>- Start the machine    --> 1
5>- select container     --> 2
6>- select toppings      --> 3
7>- serve the ice-cream  --> 2

*********************/

const stocks = {
  fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanutts"],
};

const is_shop_open = true;

const time = (ms) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Our Shop is closed at this moment."));
    }
  });
};

const kitchen = async () => {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected`);

    await time(0);
    console.log("Order Recieved.... Production has been started.");

    await time(2000);
    console.log("Fruits has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added.`);

    await time(1000);
    console.log("The Machine has been started.");

    await time(2000);
    console.log(`Ice-cream placed on holder ${stocks.holder[0]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as topping.`);

    await time(2000);
    console.log("Serve the Ice-cream.");
  } catch (error) {
    console.log("Customer has left.");
  } finally {
    console.log("\n***Thank You For Visiting Our Shop***");
    console.log("^--See You Next Time--^\n");
  }
};

kitchen();
