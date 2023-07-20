// how to iterate object
const key = "email";
const person = {
  name: "Hossain",
  age: 25,
  "person hobbies": ["music", "game", "sleep"],
  [key]: "awarehossain@gmail.com",
};

// for in
// for (let k in person) {
// console.log(person[k]);
// }

// object.keys
// console.log(Object.keys(person))

// console.log(Array.isArray(Object.keys(person)))

for (let v of Object.values(person)) {
  console.log(v);
}
