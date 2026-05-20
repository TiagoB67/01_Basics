alert("Test");
document.getElementById("button").addEventListener("click", function () {
  const element = document.getElementById("content");
  element.innerHTML = "Yessir";
});
document.getElementById("add").addEventListener("click", function () {
  const value1 = document.getElementById("value1").nodeValue;
  const value2 = document.getElementById("value2").nodeValue;
  if (isNaN(value1) || isNaN(value2)) {
    alert("Input has to be a Number");
  } else {
    const sum = parseFloat(value1) + parseFloat(value2);
    alert("Sum: " + sum);
  }
});
