// small warning
// don't do this mistake

const user1 = {
  name: "John",
  age: 25,
  about() {
    console.log(this);
    console.log(`Hello, my name is ${this.name}`);
  },
};

const f1 = user1.about.bind(user1);
f1();
