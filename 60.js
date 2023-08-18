// store methods in different object

const userMethods = {
  about() {
    return `${this.name} is ${this.age} years old`;
  },
  is18() {
    return this.age >= 18;
  },
};

function createUser(name, age, email, location) {
  const user = {};

  user.name = name;
  user.age = age;
  user.email = email;
  user.location = location;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;

  return user;
}

const user1 = createUser("Hossain", 24, "awarehossain@gmail.com", "Dhaka");

const user2 = createUser("Hasan", 18, "awarehasan@gmail.com", "Dhaka");
