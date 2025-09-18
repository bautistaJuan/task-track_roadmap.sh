import { addTask } from "./todoActions.js";

function main() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTask");
  // const taskList = document.getElementById("taskList");
  // const pendingTasksCount = document.getElementById("pendingTasks");
  // const clearCompletedBtn = document.getElementById("clearCompleted");
  // const filterBtns = document.querySelectorAll(".filter-btn");

  // Eventos
  addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text) {
      addTask(text);
      taskInput.value = "";
    }
  });

  // taskInput.addEventListener("keypress", e => {
  //   if (e.key === "Enter") {
  //     const text = taskInput.value.trim();
  //     if (text) {
  //       addTask(text);
  //       taskInput.value = "";
  //     }
  //   }
  // });

  // clearCompletedBtn.addEventListener("click", () => {
  //   tasks = tasks.filter(task => !task.completed);
  //   renderTasks();
  // });

  // filterBtns.forEach(btn => {
  //   btn.addEventListener("click", () => {
  //     filterBtns.forEach(b => b.classList.remove("active"));
  //     btn.classList.add("active");
  //     renderTasks(btn.dataset.filter);
  //   });
  // });

  // // Funciones globales para los botones de las tareas
  // window.toggleTask = id => {
  //   const task = tasks.find(t => t.id === id);
  //   if (task) {
  //     task.completed = !task.completed;
  //     renderTasks();
  //   }
  // };

  // window.deleteTask = id => {
  //   tasks = tasks.filter(task => task.id !== id);
  //   renderTasks();
  // };
}
main();
