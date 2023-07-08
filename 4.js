// Callback hell

/**
                      Time(Seconds)
1>- Place the order      --> 2
2>- Cut the fruit        --> 2
3>- Add water and ice    --> 1
4>- Start the machine    --> 1
5>- select container     --> 2
6>- select toppings      --> 3
7>- serve the ice-cream  --> 2

 */
const stocks = {
  fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanutts"],
};

const order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} is selected.`);
    call_production();
  }, 2000);
};

const production = () => {
  setTimeout(() => {
    console.log("Order Received.... Starting the Production.");
    setTimeout(() => {
      console.log("The fruits has been chopped.");
      setTimeout(() => {
        console.log(
          `${stocks.liquid[0]} and ${stocks.liquid[1]} has been added.`
        );
        setTimeout(() => {
          console.log("The Machine has been Started.");
          setTimeout(() => {
            console.log(`Ice-cream placed on holder ${stocks.holder[1]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[1]} as Topping.`);
              setTimeout(() => {
                console.log("Ice-cream is Ready....");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

// The above code is not readable and it is called as callback hell.
// To avoid this we use promises.
//4............................
order(0, production);
