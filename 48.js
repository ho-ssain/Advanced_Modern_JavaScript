// // splice method
// The `splice` method is a built-in array method in JavaScript that allows you to modify an array by adding or removing elements at a specific index. It is a powerful method that can both add new elements and remove existing elements from the array.

// The syntax for the `splice` method is as follows:

array.splice(start, deleteCount, ...itemsToAdd);

// - `array`: The array on which the `splice` method is called.
// - `start`: The index at which to start modifying the array. This is the position where elements will be added or removed.
// - `deleteCount`: The number of elements to remove from the array. If `0`, no elements are removed, and you can only add elements at the specified index.
// - `...itemsToAdd` (optional): Elements that will be added to the array at the specified index. You can provide multiple elements separated by commas.

// The `splice` method returns an array containing the removed elements (if any). If no elements are removed, it returns an empty array.

// Example: Removing elements from an array using `splice`.

const numbers = [1, 2, 3, 4, 5];
const removedElements = numbers.splice(2, 2);

console.log(numbers); // Output: [1, 2, 5] (Elements at index 2 and 3 are removed)
console.log(removedElements); // Output: [3, 4] (Removed elements)

// In this example, the `splice` method is called on the `numbers` array starting from index `2` (which is `3`) and removing `2` elements. As a result, the elements at indices `2` and `3` (`3` and `4`) are removed from the `numbers` array. The removed elements are returned as an array `[3, 4]`, and the modified `numbers` array becomes `[1, 2, 5]`.

// Example: Adding elements to an array using `splice`.

const fruits = ["apple", "orange", "banana"];
fruits.splice(1, 0, "grape", "kiwi");

console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'orange', 'banana']

// In this example, the `splice` method is called on the `fruits` array starting from index `1` (which is `'orange'`) and removing `0` elements. Additionally, the elements `'grape'` and `'kiwi'` are added at the same index. As a result, `'grape'` and `'kiwi'` are inserted in the array between `'apple'` and `'orange'`, and the modified `fruits` array becomes `['apple', 'grape', 'kiwi', 'orange', 'banana']`.

// The `splice` method is versatile and allows you to perform various array manipulations, such as removing elements, inserting elements at specific positions, or replacing elements with new values. It's a useful method when you need to modify the content of an array in place.
