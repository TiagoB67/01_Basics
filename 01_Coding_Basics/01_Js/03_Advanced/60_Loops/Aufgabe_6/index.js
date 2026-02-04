//Nummeranzahl abfragen
let nummer = prompt("Wie viele Zahlen möchten Sie eingeben?");
let summe = 0;

//Eingabe in eine Zahl umwandeln
let n = parseInt(nummer);

//Loop
for (let a = 0; a < n; a++) {
  let p = prompt("Geben Sie eine Zahl ein:");
  p = parseInt(p);
  summe += p;
}

//Durchschnitt berechnen
summe = summe / n;
summe = summe.toFixed(2);

//Ergebniss ausgeben
console.log(summe);
