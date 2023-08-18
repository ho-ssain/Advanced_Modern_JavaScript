// Sets
/*
-----------------------------------------

In JavaScript, a Set is a built-in data structure that represents a collection of unique values. Unlike arrays, which allow duplicate elements, a Set ensures that each element appears only once, making it suitable for managing a list of distinct values.

The key characteristics of Sets are:

Uniqueness: A Set cannot have duplicate elements. If you try to add an element that already exists in the Set, it will not be added again.

Ordering: Sets do not maintain the insertion order of elements. When iterating through a Set, the elements will be retrieved in the order of insertion, but there is no guarantee that they will be in a specific order.

Iterability: Sets are iterable, meaning you can use loops like for...of to go through the elements in the Set.

No Key-Value Pairs: Sets only store individual values, not key-value pairs like objects or Maps.

Creating a Set is straightforward, and you can add elements using the add method:

*/

const mySet = new Set();

mySet.add(1);
mySet.add("Hello");
mySet.add(true);

// You can also pass an array of elements to the Set constructor to create a Set directly from an array:

const numbers = [1, 2, 3, 44, 44, 54, 43, 1, 2];
const uniqueNumbers = new Set(numbers);
// console.log(numbers)
// console.log(uniqueNumbers)

// to check the number of elements in a Set, you can use the 'size' property
console.log(uniqueNumbers.size);

// to check if a value exists in a Set, you can use the 'has' method
console.log(uniqueNumbers.has(234));

// to remove a element from a Set, you can use 'delete'
console.log(uniqueNumbers.delete(44));

// Sets provide a convenient way to manage unique elements and can be helpful in various scenarios, such as
// 1. filtering out duplicates from arrays,
// 2. keeping track of unique values in a data set,
// 3. or checking for the presence of specific elements efficiently.
// Keep in mind that Sets use strict equality (===) to determine uniqueness, so two objects with the same properties but different references will be considered different elements in a Set.

const o1 = { name: "John" };
const o2 = { name: "John" };

const set = new Set([o1, o2]);
console.log(o1 === o2); // false
