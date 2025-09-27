const TASKS_KEY = "tasks";

function getTasks() {
  const tasksJson = localStorage.getItem(TASKS_KEY);
  try {
    return tasksJson ? JSON.parse(tasksJson) : [];
  } catch (e) {
    console.error("Error parsing tasks from localStorage:", e);
    return [];
  }
}
function saveTasks(tasks) {
  const existingTasks = getTasks();
  existingTasks.push(tasks);

  localStorage.setItem(TASKS_KEY, JSON.stringify(existingTasks));
}

export { saveTasks, getTasks };
