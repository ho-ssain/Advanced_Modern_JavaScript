// Optional chaining is a feature introduced in ECMAScript 2020 (ES11) to simplify the process of accessing nested properties or methods on objects, especially when dealing with potentially undefined or null values.

// Before optional chaining, if you wanted to access a deeply nested property or method on an object, you had to manually check each level for the existence of the property or use conditional checks to avoid errors:

const person = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco",
    fullAddress: {
      doorNumber: 22,
      street: "LA st",
      region: "California",
    },
  },
};

// Without optional chaining (pre-ES11)
const doorNumber = person.address
  ? person.address.fullAddress
    ? person.address.fullAddress.doorNumber
    : "unknown"
  : "unknown";

console.log(doorNumber); // 22

// With optional chaining (ES11 and later)

const street = person.address?.fullAddress?.street;
