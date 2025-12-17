let check = prompt("Please enter your pin:");

let realpin = 1234;
let pin = parseInt(check);
if (pin === realpin) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
