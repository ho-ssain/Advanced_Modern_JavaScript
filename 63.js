function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  eat: function () {
    console.log("Person is eating!");
  },
  sleep: function () {
    console.log("Person is sleeping");
  },
  play: function () {
    console.log("Person is playing");
  },
};

const Hossain = new Person("Hossain", 26);
