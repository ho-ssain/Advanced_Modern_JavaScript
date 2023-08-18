// continue........

const userMethods = {
  about() {
    return `${this.name} is ${this.age} years old`;
  },
  is18() {
    return this.age >= 18;
  },
};

function createUser(name, age, email, location) {
  const user = Object.create(userMethods);

  user.name = name;
  user.age = age;
  user.email = email;
  user.location = location;

  return user;
}

const user1 = createUser("Hossain", 24, "awarehossain@gmail.com", "Dhaka");

const user2 = createUser("Hasan", 18, "awarehasan@gmail.com", "Dhaka");

console.log(user1);
