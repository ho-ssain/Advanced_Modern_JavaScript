// Recursive traversal in JavaScript

const company = {
  sale: [
    { name: "Hanaka", salary: 2500 },
    { name: "Hifashi", salary: 2000 },
  ],
  development: {
    sites: [
      { name: "Fujja", salary: 5000 },
      { name: "Nobico", salary: 3000 },
    ],
    internals: {
      TeamA: [
        { name: "Nisu", salary: 50_000 },
        { name: "Osha", salary: 30_000 },
      ],
      TeamB: [
        { name: "Hossain", salary: 500_000 },
        { name: "Hasan", salary: 200_000 },
      ],
    },
  },
};

// Linked List
// What is a linked list?
// A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list.
// Each element (commonly called nodes) contains two items: the data stored and a link to the next node. The data can be any valid data type. In JavaScript, a linked list looks like this:
// {data: 1, next: {data: 2, next: {data: 3, next: null}}}.
//The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference.

/* 

# 1 --> 2 --> 3 --> 4 --> 5 --> null // singly linked list
# 1 --> 2 --> 3 --> 4 --> 5 --> 1 // circular linked list
*/

const arr = [o1, o2, o3];
