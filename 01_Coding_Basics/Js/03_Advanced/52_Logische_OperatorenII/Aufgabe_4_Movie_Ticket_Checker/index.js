//Variablen erstellen
let age = prompt("Bitte geben Sie Ihr Alter ein:");
let money = prompt("Bitte geben Sie Ihren Geldbetrag in Euro ein:");

//Variablen in Zahlen umwandeln
age = parseInt(age);
money = parseInt(money);

if (age >= 18 && money >= 12) {
  console.log("Ticket purchased");
} else if (age >= 18 && money < 12) {
  console.log("Not enough money");
} else {
  console.log("Too young to watch the movie");
}
