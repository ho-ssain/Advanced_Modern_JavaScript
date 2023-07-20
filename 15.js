//> logical operators
// Logical operators in JavaScript are used to perform logical operations on boolean values or expressions. They allow you to combine conditions and evaluate the results. JavaScript provides three logical operators: && (logical AND), || (logical OR), and ! (logical NOT).

/**
Logical AND (&&):
  (1) The logical AND operator returns true if both operands are true, and false otherwise.
  (2) It performs short-circuit evaluation, meaning that if the first operand is false, the second operand is not evaluated.

  */
let num = 5;
if (num > 0 && num < 10) {
  console.log(num + " is a positive single-digit number.");
} else {
  console.log("The number is not a positive single-digit number.");
}

/**
Logical OR (||):
  (1) The logical OR operator returns true if at least one of the operands is true, and false if both operands are false.
  (2) It also performs short-circuit evaluation, meaning that if the first operand is true, the second operand is not evaluated.

  */
let fruit = "apple";
if (fruit === "apple" || fruit === "banana") {
  console.log("It is a fruit I like");
} else {
  console.log("I do not like this fruit.");
}

/**
Logical NOT (!):
  (1) The logical NOT operator negates the boolean value of an operand. If the operand is true, it returns false. If the operand is false, it returns true.

  */
let hasPermission = false;
if (!hasPermission) {
  console.log("You do not have permission to access this resources.");
}

//
// Short-circuit evaluation is a behavior exhibited by logical operators (&& and ||) in JavaScript, where the second operand is not evaluated if the result can be determined based on the value of the first operand alone. This can be leveraged to perform more efficient and concise code execution. Here are some examples:

//..............And &&
let _name = "John";
let age = 25;

if (_name && ahe >= 18) {
  console.log("Welcome, " + _name + "!");
}

//.............Or ||
let city = "Dhaka";
let defaultCity = "Cumilla";

let preferCity = city || defaultCity;
console.log("Prefered City:", preferCity);
