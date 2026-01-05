//variablen erstellen
let temperature = prompt("Gib die Temperatur als Numer in °C ein:");
let humidity = prompt("Gib die Luftfeuchtigkeit als Nummer in % ein:");

//Eingaben in Zahlen umwandeln
temperature = parseInt(temperature);
humidity = parseInt(humidity);

//Bedingungen überprüfen und Meldung ausgeben
if (temperature <= 25 && temperature >= 20 && humidity < 60) {
  console.log("Perfect day for outdoor activities!");
} else {
  console.log("Maybe stay indoors today.");
}
