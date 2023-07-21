//> Spread operator in array and objects
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [11, 22, 33, 44, 55];

const cloneArr = [...arr1, ...arr2, 100, 200, ..."abcd"];
// console.log(cloneArr)

const obj1 = {
  key1: "v1",
  key2: "v2",
};
const obj2 = {
  key3: "v3",
  key4: "v4",
};

const cloneObj = { ...obj1, ...obj2 };

const obj3 = { ..."abc" }; // {0:a, 1:b, 2:c}

const obj4 = { ...[1, 2, 3] }; // {0:1, 1:2, 2:3}
console.log(obj4);
