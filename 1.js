const prompt = require("prompt-sync")();

let name = prompt("Enter the client name? ");
let bill = prompt("Enter the bill? ");

let mess = `Welcome to Our Shop, Mr/Ms. ${name}. Your bill is Tk.${bill}. Thank You. Plz Visit again.`;

console.log(mess);
