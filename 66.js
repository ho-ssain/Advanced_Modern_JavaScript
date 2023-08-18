class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log("Person is eating.");
  }
}

class Cricketer extends Person {
  constructor(name, age, type, country) {
    super(name, age);
    this.type = type;
    this.country = country;
  }
  play() {
    console.log(`${this.name} is playing.`);
  }
}

const sakib = new Cricketer("sakib", 25, "all", "Ban");
console.log(sakib);
