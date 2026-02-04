//loop
for (let a = 1; a <= 50; a++) {
  let rest = a % 2;
  if (rest === 0) {
    continue;
  } else {
    console.log(a);
  }
}
