
let banane = "Banane"
let apple = "Apple"
let bananePricePerKilo = 2.14;
let applePricePerKilo = 3.43;
let bananeWeight = 0.22;
let appleWeight = 0.34;

let bananeProKilo = (1 / bananeWeight);
let appleProKilo = (1 / appleWeight);

let applePrice = (applePricePerKilo / appleProKilo);
let bananePrice = (bananePricePerKilo / bananeProKilo);
let Answer1 = (8 * applePrice);
let Answer2 = (17 * bananePrice);
let Answer3 = (applePricePerKilo * 1000);
let Answer4 = (bananePricePerKilo * 1000);


console.log ("8 Äpfel kosten " + Answer1.toFixed(2) + ("€"));
console.log ("17 Bananen kosten " + Answer2.toFixed(2) + ("€"));
console.log ("Eine Tonne Äpfel kostet " + Answer3 + ("€"));
console.log ("Eine Tonna Bananen kostet " + Answer4 + ("€"));