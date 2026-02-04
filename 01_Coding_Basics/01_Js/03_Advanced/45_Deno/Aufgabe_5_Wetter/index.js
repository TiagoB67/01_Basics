let temperature = prompt("Geben Sie die Temperatur in Grad Celsius ein:");
let temp = parseInt(temperature);

//Temperatur auswerten
if (temp < 15 && temp > -10) {
  console.log("Warm anziehen!");
} else if (temp < -10) {
  console.log("Drinnen bleiben!");
}
if (temp >= 15 && temp <= 25) {
  console.log("Raus gehen!");
} else if (temp > 25 && temp <= 40) {
  console.log("Baden gehen!");
} else if (temp > 40) {
  console.log("In die Kühlbox gehen!");
}
