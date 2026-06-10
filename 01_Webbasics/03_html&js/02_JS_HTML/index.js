alert("Test");
document.getElementById("button").addEventListener("click", function () {
  const element = document.getElementById("content");
  element.innerHTML = "Yessir";
});
const sumadd = document
  .getElementById("add")
  .addEventListener("click", function () {
    const add1 = document.getElementById("value1").value;
    const add2 = document.getElementById("value2").value;
    const plus = parseFloat(add1) + parseFloat(add2);
    document.getElementById("result").innerHTML = plus;
  });
const sumsub = document
  .getElementById("sub")
  .addEventListener("click", function () {
    const sub1 = document.getElementById("value1").value;
    const sub2 = document.getElementById("value2").value;
    const sub = parseFloat(sub1) - parseFloat(sub2);
    document.getElementById("result").innerHTML = sub;
  });
const summult = document
  .getElementById("mult")
  .addEventListener("click", function () {
    const mult1 = document.getElementById("value1").value;
    const mult2 = document.getElementById("value2").value;
    const mult = parseFloat(mult1) * parseFloat(mult2);
    document.getElementById("result").innerHTML = mult;
  });
const sumdiv = document
  .getElementById("div")
  .addEventListener("click", function () {
    const div1 = document.getElementById("value1").value;
    const div2 = document.getElementById("value2").value;
    const div = parseFloat(div1) / parseFloat(div2);
    document.getElementById("result").innerHTML = div;
  });
