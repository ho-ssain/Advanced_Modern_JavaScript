// Map

// In JavaScript, a Map is a built-in data structure that allows you to store key-value pairs, where each key is unique, and you can associate a value with each key. Maps are useful for efficiently managing and accessing data based on specific identifiers or keys.

// Key features of Maps:

// 1. **Key-Value Pairs**: A Map stores data as key-value pairs, where the key is used to identify and access the associated value.

// 2. **Uniqueness of Keys**: Each key in a Map must be unique. If you attempt to add a key-value pair with an existing key, the new value will overwrite the existing one.

// 3. **Ordering**: Unlike regular objects, Maps preserve the order of insertion. When iterating through a Map, the elements are retrieved in the order in which they were added.

// 4. **Iterability**: Maps are iterable, meaning you can use loops like `for...of` to go through the key-value pairs.

// Creating a Map is straightforward, and you can add key-value pairs using the `set` method:

const myMap1 = new Map();
myMap1.set("name", "Alice");
myMap1.set("age", 30);
myMap1.set("isStudent", true);

// You can also pass an array of key-value pairs to the Map constructor to create a Map directly from an array of arrays:

const keyValuePairs = [
  ["name", "Alice"],
  ["age", 30],
  ["isStudent", true],
];

const myMap2 = new Map(keyValuePairs);

// To retrieve a value from a Map, you can use the `get` method and pass the key:

console.log(myMap2.get("name")); // Output: "Alice"

// To check if a key exists in a Map, you can use the `has` method:

console.log(myMap2.has("age")); // Output: true
console.log(myMap2.has("address")); // Output: false

// To remove a key-value pair from a Map, you can use the `delete` method:

myMap2.delete("isStudent"); // Removes the key "isStudent" and its associated value

// Maps provide a more flexible and versatile way of associating data with unique keys compared to regular objects. They are particularly useful when you need to store and retrieve data based on specific identifiers, or when you want to ensure the order of insertion is maintained. Maps are widely used in various applications, such as managing configurations, caching data, implementing lookup tables, and more.
