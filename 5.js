// Promise
//What is a promise?
//--> A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

/**

A Promise is made
----> Pending
      |     |
      |     |
      |     |
Resolve     Reject
      |     |
      |     |
      |     |
  .then     .catch
      |     |
  .then     |
      |     |
      |     |
      |---> .finally

Explanation:
Above is a scenerio how promis is make and how it is resolved or rejected. A promise is made and it is in pending state. If the promise is resolved then it goes to .then and if it is rejected then it goes to .catch. Finally is executed in both the cases.
 */

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

const is_shop_open = false;

const order = (time, work) => {
  return new Promise((Resolve, Reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        Resolve(work());
      }, time);
    } else {
      Reject(console.log("Sorry, the Shop is Closed."));
    }
  });
};

order(2000, () => console.log(`${stocks.fruits[2]} is Selected.`))
  .then(() => {
    return order(1000, () =>
      console.log("Order Received.... Starting the Production.")
    ).then(() => {
      return order(2000, () =>
        console.log("The fruits has been chopped.")
      ).then(() => {
        return order(1000, () =>
          console.log(
            `${stocks.liquid[0]} and ${stocks.liquid[1]} has been added.`
          )
        ).then(() => {
          return order(1000, () =>
            console.log("The Machine has been Started.")
          ).then(() => {
            return order(2000, () =>
              console.log(`Ice-cream placed on holder ${stocks.holder[1]}`)
            ).then(() => {
              return order(3000, () =>
                console.log(`${stocks.toppings[1]} as Topping.`)
              ).then(() => {
                return order(2000, () => console.log("Ice-cream is Ready...."));
              });
            });
          });
        });
      });
    });
  })
  .catch(() => console.log("Customer left."))
  .finally(() => console.log("Thank you for visiting our shop."));

// console.dir(pro)

/*
Why use promises?
--> Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
*/

/**

Promise:
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined


when does the PromiseState changes to Rejected? Give an example?
--> When the promise is rejected then the PromiseState changes to Rejected. For example, if the shop is closed then the promise is rejected and the PromiseState changes to Rejected.

 */
