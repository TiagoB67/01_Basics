//Array erstellen
let a = [4, 1, 2, 3];

//variable für Summe
let sum = 0;

//Werte hinzufügen

a.push(17);
a.push(199);

//Loop

for (let b = 0; b < a.length; b++) {
  console.log(a[b]);
  sum += a[b];
}

//Ergebnis ausgeben

console.log(sum);

//Durchschnitt berechnen

let durchschnitt = sum / a.length;
durchschnitt = durchschnitt.toFixed(2);
console.log(durchschnitt);
