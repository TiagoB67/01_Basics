//Variablen erstellen
let a = [1, 25, 6, 2, 5];
let min = a[0];
let max = a[0];

//Größten und kleinsten Wert finden
for (let b = 0; b < a.length; b++) {
  if (a[b] < min) {
    min = a[b];
  }
  if (a[b] > max) {
    max = a[b];
  }
}

//Ergebnisse ausgeben
console.log("Kleinster Wert : " + min);
console.log("Höchster Wert :  " + max);
