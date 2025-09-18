const TASKS_KEY = "tasks";

function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

// function getTasks() {
//   const tasksJson = localStorage.getItem(TASKS_KEY);
//   try {
//     return tasksJson ? JSON.parse(tasksJson) : {};
//   } catch (e) {
//     console.error("Error parsing tasks from localStorage:", e);
//     return {};
//   }
// }

export { saveTasks };
