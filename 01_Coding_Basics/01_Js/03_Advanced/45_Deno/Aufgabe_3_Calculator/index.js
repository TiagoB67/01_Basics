let number1 = prompt("Geben Sie die erste Zahl ein:");
let number2 = prompt("Geben Sie die zweite Zahl ein:");
let Rechenart = prompt("Geben Sie die Rechenart ein (+, -, *, /):");

//Eingabe in Zahl umwandeln
let n1 = parseInt(number1);
let n2 = parseInt(number2);
let Result;

//Rechenart bestimmen
if (Rechenart == "+") {
  Result = n1 + n2;
} else if (Rechenart == "-") {
  Result = n1 - n2;
} else if (Rechenart == "*") {
  Result = n1 * n2;
} else if (Rechenart == "/") {
  Result = n1 / n2;
} else {
  console.log("Error");
}
//Runden + Ergebnis
Result = Result.toFixed(2);
console.log("Das Ergebnis ist: " + Result);
