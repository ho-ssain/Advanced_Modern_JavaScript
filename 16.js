//> Nested If else
// Nested if...else statements in JavaScript allow you to have conditional statements within other conditional statements. This allows for more complex decision-making based on multiple conditions.
// let's make a game with if...else statement that simulates a game scenario where the player's choices determine the outcome:

/*

Game Name-: Monster Encounter

Description:
In this text-based adventure game, the player encounters a fearsome monster. The player must make choices to attack or heal themselves and try to defeat the monster while managing their own health. The outcome of the game depends on the player's decisions and the health of the player and the monster.


Objective:
Defeat the monster by reducing its health to zero without letting the player's health drop to zero or below.

Rules:

(1 )The player starts with 100 health points.

(2) The monster starts with 100 health points.

(3) The player can choose to attack or heal themselves.

(4) If the player chooses to attack, a random amount of damage between 1 and 20 is dealt to the monster.

(5) If the player chooses to heal, a random amount of health between 10 and 24 is restored to the player.

(6) After the player's action, the monster counterattacks by dealing a random amount of damage between 1 and 15 to the player.

(7)The game continues until either the player or the monster's health drops to zero or below.

(8)If the player's health reaches zero or below, the game ends, and the player is defeated.

(9)If the monster's health reaches zero or below, the game ends, and the player is victorious.

>Example Output:
------------------------------------------------
Welcome, [PlayerName]! You encounter a fearsome monster. Good luck!

[PlayerName], what will you do? (attack/heal)
> attack

You attack the monster and deal 14 damage.
The monster counterattacks and deals 8 damage.
Player health: 92, Monster health: 86

[PlayerName], what will you do? (attack/heal)
> heal

You choose to heal yourself and restore 18 health.
The monster attacks and deals 10 damage.
Player health: 100, Monster health: 76

...

Congratulations! You defeated the monster!
--------------------------------------------------
*/
const prompt = require("prompt-sync")();
let playerName = "";
let playerHealth = 100;
let monsterHealth = 100;

playerName = prompt("What is your name? ");
console.log(
  `Welcome, ${playerName}! You encounter a fearsome monster. Good Luck!`
);

if (playerHealth > 0) {
  // player is alive, so the game continues
  let playerChoise = prompt("What will you do? (attack/heal)");

  if (playerChoise === "attack") {
    // Player chooses to attack the monster
    let damage = Math.floor(Math.random() * 20) + 1;
    monsterHealth -= damage;
    console.log(`You attack the monster and deal ${damage} damage.`);

    if (monsterHealth <= 0) {
      console.log("Congratualations! You defeated the monster!");
    } else {
      // Monster is still alive.

      let monsterDamage = Math.floor(Math.random() * 15) + 1;
      playerHealth -= monsterDamage;
      console.log(
        `The monster counter-attacks and deals ${monsterDamage} damage.`
      );
      if (playerHealth <= 0) {
        console.log("Game over! The monster has defeated you.");
      } else {
        console.log(
          `Player health: ${playerHealth}, Monster health: ${monsterHealth}`
        );
      }
    }
  } else if (playerChoise === "heal") {
    // Player chooses to heal themeselves.
    let healing = Math.floor(Math.random() * 15) + 10;
    playerHealth += healing;
    console.log(`You choose to heal yourself and restore ${healing} health.`);

    let monsterDamage = Math.floor(Math.random() * 15) + 1;
    playerHealth -= monsterDamage;
    console.log(`The monster attacks and deals ${monsterDamage} damage.`);
    if (playerHealth <= 0) {
      console.log("Game Over! The monster has defeated you.");
    } else {
      console.log(
        `Player health: ${playerHealth},Monster health: ${monsterHealth}`
      );
    }
  } else {
    console.log("Invalid choise! The monster attacks you while you hesitate.");
    let monsterDamage = Math.floor(Math.random() * 15) + 1;
    playerHealth -= monsterDamage;
    console.log(`The monster attacks and deals ${monsterDamage} damage.`);

    if (playerHealth <= 0) {
      console.log("Game Over! The monster has defeated uou.");
    } else {
      console.log(
        `Player health: ${playerHealth}, Monster health: ${monsterHealth}`
      );
    }
  }
} else {
  console.log("Game over! You are too weak to continue.");
}
