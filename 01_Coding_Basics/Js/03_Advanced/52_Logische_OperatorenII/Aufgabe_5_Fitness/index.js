//variable erstellen
let heartRate = prompt("Geben Sie ihren Herzschlag in bpm ein:");
let age = prompt("Geben Sie ihr Alter in einer numer ein:");

//variable in number umwandeln
heartRate = parseInt(heartRate);
age = parseInt(age);

//Bedingungen überprüfen
if (age < 30 && heartRate < 100) {
  console.log("Hard exercise");
} else if (age > 30 || heartRate >= 100) {
  console.log("Light exercise");
}
