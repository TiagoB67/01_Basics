let grade = prompt("Wie viel Prozent hast du erreicht?");

// Konvertiere die Eingabe in eine Zahl
let perzent = parseInt(grade);
//Note berechnen
if (perzent >= 90 && perzent <= 100) {
  console.log("Grade: A");
} else if (perzent >= 80 && perzent < 90) {
  console.log("Grade: B");
} else if (perzent >= 70 && perzent < 80) {
  console.log("Grade: C");
} else if (perzent >= 60 && perzent < 70) {
  console.log("Grade: D");
} else if (perzent >= 0 && perzent < 60) {
  console.log("Grade: F");
} else {
  console.log("Ungültige Eingabe");
}
