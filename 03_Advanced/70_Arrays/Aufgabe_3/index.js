//Variablen erstellen
let sum = 0;
let a = [];
//random Werte Generieren
for (let b = 0; b < 7; b++) {
  a[b] = Math.floor(Math.random() * 100);
}

//Werte aus dem Array zusammenzählen
for (let b = 0; b < a.length; b++) {
  sum += a[b];
}

//Ergebnis ausgeben
console.log(sum);
