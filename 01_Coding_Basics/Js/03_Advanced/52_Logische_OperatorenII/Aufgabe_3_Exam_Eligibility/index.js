//Variablen erstellen
let grade = prompt("Bitte geben Sie Ihre Note als Numer von 0-100:");
let attendance = prompt(
  "Bitte geben Sie Ihre Anwesenheitsrate als Numer von 0-100:"
);
let extraCredit = prompt(
  "Bitte geben Sie Ihre Extra-Credit-Punkte als Numer von 0-10:"
);

//variablen in Zahlen umwandeln
grade = parseInt(grade);
attendance = parseInt(attendance);
extraCredit = parseInt(extraCredit);
//Prüfen ob die Eingaben gültig sind
if ((grade >= 80 && attendance >= 90) || extraCredit >= 5) {
  console.log("Eligible for advanced exam");
} else {
  console.log("Not eligible for advanced exam");
}
