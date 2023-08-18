// create functions to create multiple objects

// function
function createUser(name, age, email, location) {
  const user = {};

  user.name = name;
  user.age = age;
  user.email = email;
  user.location = location;
  user.about = function () {
    return `${this.name} is ${this.age} years old`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };

  return user;
}

const user1 = createUser("Hossain", 24, "awarehossain@gmail.com", "Dhaka");
