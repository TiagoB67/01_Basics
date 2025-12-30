let alter = prompt("Bitte geben Sie Ihr Alter ein:");
let alterZahl = parseInt(alter);

// Alter auswerten
if (alterZahl <= 35) {
  console.log("Jung");
} else if (alterZahl >= 60) {
  console.log("Alt");
} else {
  console.log("Mittelalt");
}
