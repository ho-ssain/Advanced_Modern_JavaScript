// fill method
// The fill method is a built-in array method in JavaScript that allows you to change the values of elements in an array with a specified value. It modifies the original array and fills it with the given value, starting from a specified index and ending at an optional end index.

// The fill method changes the values of elements in the specified range to the given value. It does not create a new array but modifies the original array in place.

/**
array.fill(value, start, end);

array: The array on which the fill method is called.
value: The value that will be used to fill the array.
start (optional): The index at which to start filling the array. If not provided, it defaults to 0 (the beginning of the array).
end (optional): The index at which to stop filling the array (the element at this index will not be included in the filling). If not provided, it defaults to array.length (the end of the array).
 */

const numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 1, 4);

console.log(numbers); // Output: [1, 0, 0, 0, 5]
