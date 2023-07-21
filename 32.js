//> Object inside array

const Users = [
  { u_i: 1, f_name: "Hossain" },
  { u_i: 2, f_name: "Hasan" },
  { u_i: 3, f_name: "Shohan" },
];

let [{ u_i }, , { f_name }] = Users;
console.log(u_i);
console.log(f_name);
