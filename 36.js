//> function inside function

const app = () => {
  console.log("Inside app !!");
  const addTwo = (n1, n2) => n1 + n2;
  const mulTwo = (n1, n2) => n1 * n2;

  console.log(addTwo(2, 3));
  console.log(mulTwo(4, 5));
};
app();
