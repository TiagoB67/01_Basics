//variablen erstellen
let speed = prompt("Gib deine Geschwindigkeit in km/h ein:");
let trafficLevel = prompt("Gib das Verkehrslevel in einer Zahl von 1-10 ein:");

//variablen in zahlen umwandeln
speed = parseInt(speed);
trafficLevel = parseInt(trafficLevel);

//Nachricht ausgeben basierend auf den Bedingungen
if (speed > 80 || trafficLevel > 7) {
  console.log("Slow down!");
} else {
  console.log("You are good to go.");
}
