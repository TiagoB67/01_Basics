//Variablen erstellen
let a = [15, 16, 17, 18];
let sum = 0;

//Werte im Array addieren
for (let b = 0; b < a.length; b++) {
  sum += a[b];
}
//Durchschnitt berechnen

let avarage = sum / a.length;

//Ergebnis ausgeben
console.log(avarage);
