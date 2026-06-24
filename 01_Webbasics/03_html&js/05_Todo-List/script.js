let todos = [
  { id: 1, titel: "putzen", isDone: false },
  { id: 2, titel: "lernen", isDone: false },
  { id: 3, titel: "kaufen", isDone: false },
  { id: 4, titel: "kochen", isDone: false },
];

let maxId = 4;
document.getElementById("input").addEventListener("change", function (event) {
  console.log(event.target.value);
  todos.push({ id: 5, titel: event.target.value, isDone: false });
  printTasks();
  event.target.value = "";
});
function printTasks() {
  let html = "";
  todos.forEach((element) => {
    html +=
      "<div class=,'task'>" +
      element.titel +
      " - " +
      element.isDone +
      "</div>Done</div><div>Delete</div>";
  });
  document.getElementById("todos").innerHTML = html;
}
