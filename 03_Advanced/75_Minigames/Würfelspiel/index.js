let a = prompt("Drücke Enter um zu würfeln");
let b = 0;
let scoreComputer = 0;
let scoreSpieler = 0;
let computerZahl = Math.floor(Math.random() * 6) + 1;
let spielerZahl = Math.floor(Math.random() * 6) + 1;
if (a == "") {
  console.log(
    "Sie haben " +
      spielerZahl +
      " gewürfelt und der Computer hat " +
      computerZahl +
      " gewürfelt",
  );
}
if (computerZahl > spielerZahl) {
  scoreComputer += 1;
  console.log("Der Computer hat gewonnen!");
} else if (spielerZahl > computerZahl) {
  scoreSpieler += 1;
  console.log("Sie haben gewonnen!");
} else {
  console.log("Unentschieden!");
}

b = prompt("Wollen Sie nochmal spielen? (Ja / Nein) ");

if (b == "Ja" || b == "ja" || b == "JA") {
  location.reload();
} else {
  console.log(
    "Endstand: Spieler " + scoreSpieler + " : " + "Computer" + scoreComputer,
  );
  console.log("Danke fürs Spielen!");
}
