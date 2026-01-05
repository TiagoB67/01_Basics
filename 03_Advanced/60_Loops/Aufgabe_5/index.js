//Zahl anfordern
let a = prompt("Gib eine Zahl ein:");
let b = prompt("Gib eine weitere Zahl ein:");
let sum = 0;

// Eingaben in Zahlen umwandeln
a = parseInt(a);
b = parseInt(b);

//Loop
if (a < b) {
  for (let c = a; c <= b; c++) {
    sum += c;
  }
} else {
  for (let c = a; c >= b; c--) {
    sum += c;
  }
}
//Summe ausgeben
console.log(sum);
