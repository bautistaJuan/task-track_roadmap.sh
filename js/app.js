function main() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const pendingTasksCount = document.getElementById("pendingTasks");
  const clearCompletedBtn = document.getElementById("clearCompleted");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let tasks = [];

  // Agregar tarea
  function addTask(text) {
    const task = {
      id: Date.now(),
      text,
      completed: false,
    };
    tasks.push(task);
    renderTasks();
  }

  // Renderizar tareas
  function renderTasks(filter = "all") {
    let filteredTasks = tasks;
    if (filter === "pending") {
      filteredTasks = tasks.filter(task => !task.completed);
    } else if (filter === "completed") {
      filteredTasks = tasks.filter(task => task.completed);
    }

    taskList.innerHTML = "";
    filteredTasks.forEach(task => {
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";
      li.innerHTML = `
                <span>${task.text}</span>
                <div>
                    <button onclick="toggleTask(${task.id})">${
        task.completed ? "↩️" : "✅"
      }</button>
                    <button onclick="deleteTask(${task.id})">❌</button>
                </div>
            `;
      taskList.appendChild(li);
    });

    updatePendingCount();
  }

  // Actualizar contador de tareas pendientes
  function updatePendingCount() {
    const pendingCount = tasks.filter(task => !task.completed).length;
    pendingTasksCount.textContent = pendingCount;
  }

  // Eventos
  addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text) {
      addTask(text);
      taskInput.value = "";
    }
  });

  taskInput.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      const text = taskInput.value.trim();
      if (text) {
        addTask(text);
        taskInput.value = "";
      }
    }
  });

  clearCompletedBtn.addEventListener("click", () => {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderTasks(btn.dataset.filter);
    });
  });

  // Funciones globales para los botones de las tareas
  window.toggleTask = id => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      renderTasks();
    }
  };

  window.deleteTask = id => {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
  };
}
main();
