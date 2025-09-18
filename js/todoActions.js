import { saveTasks } from "./database.js";

let tasks = [];
// // Agregar tarea
export function addTask(text) {
  const task = {
    id: Date.now(),
    text,
    completed: false,
  };
  tasks.push(task);
  saveTasks(tasks);
  console.log("Task added:", task);

  // renderTasks();
}

// // // Renderizar tareas
// // function renderTasks(filter = "all") {
// //   let filteredTasks = tasks;
// //   if (filter === "pending") {
// //     filteredTasks = tasks.filter(task => !task.completed);
// //   } else if (filter === "completed") {
// //     filteredTasks = tasks.filter(task => task.completed);
// //   }

// //   taskList.innerHTML = "";
// //   filteredTasks.forEach(task => {
// //     const li = document.createElement("li");
// //     li.className = task.completed ? "completed" : "";
// //     li.innerHTML = `
// //                 <span>${task.text}</span>
// //                 <div>
// //                     <button onclick="toggleTask(${task.id})">${
// //       task.completed ? "↩️" : "✅"
// //     }</button>
// //                     <button onclick="deleteTask(${task.id})">❌</button>
// //                 </div>
// //             `;
// //     taskList.appendChild(li);
// //   });

// //   updatePendingCount();
// // }

// // // Actualizar contador de tareas pendientes
// // function updatePendingCount() {
// //   const pendingCount = tasks.filter(task => !task.completed).length;
// //   pendingTasksCount.textContent = pendingCount;
// // }
