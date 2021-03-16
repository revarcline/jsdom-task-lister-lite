document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.querySelector("input#new-task-description");
  let tasks = [];
  document
    .querySelector("input#submit-task")
    .addEventListener("click", function (e) {
      let task = taskInput.value;
      tasks.push(task);
      displayTasks(tasks);
      taskInput.value = "";
      e.preventDefault();
    });
});

function displayTasks(tasks) {
  const taskList = document.querySelector("ul#tasks");
  let taskItems = tasks.map((task) => `<li>${task}</li>`);
  taskList.innerHTML = taskItems.join("\n");
}
