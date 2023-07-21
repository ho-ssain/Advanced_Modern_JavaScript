// sort method
// The sort method is a built-in array method in JavaScript that allows you to sort the elements of an array in place, meaning it directly modifies the original array. By default, it sorts elements as strings and arranges them in ascending order.
/*
The syntax for the sort method is as follows:

javascript
Copy code
array.sort([compareFunction]);
array: The array on which the sort method is called.
compareFunction (optional): A function that defines the sort order. If not provided, the array is sorted based on string Unicode code points.
The compareFunction is an optional parameter that you can provide to customize the sorting behavior. It is a callback function that takes two elements from the array as input (often referred to as a and b). The function should return a negative number if a should come before b, a positive number if a should come after b, or 0 if both elements are considered equal.

*/

const books = [
  { title: "Book A", pubDate: 2010 },
  { title: "Book B", pubDate: 2005 },
  { title: "Book C", pubDate: 2012 },
  { title: "Book D", pubDate: 1890 },
];

books.sort((b1, b2) => b1.pubDate - b2.pubDate);
console.log(books);
