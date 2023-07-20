//> if elseif

let temInDegree = 50;

if (temInDegree < 0) {
  console.log("Extremely Cold Weather !!");
} else if (temInDegree < 16) {
  console.log("Cold Weather!!");
} else if (temInDegree < 25) {
  console.log("Weather is Okay !!");
} else if (temInDegree < 35) {
  console.log("Let's go for swim.");
} else if (temInDegree < 45) {
  console.log("Turn on AC.");
} else {
  console.log("Too Hot!!");
}
