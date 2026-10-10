// Task manager: tasks persist in this browser through localStorage.
const taskCourses = [
  ["51001", "HCI & CG"], ["51002", "Operating System"], ["51003", "Web Technologies"],
  ["51004", "Computer Architecture"], ["51005", "Mobile App Development"], ["51006", "Introduction to Management"]
];
const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskCourse = document.getElementById("taskCourse");
const taskDue = document.getElementById("taskDue");
const taskPriority = document.getElementById("taskPriority");
const taskMessage = document.getElementById("taskMessage");
const taskList = document.getElementById("taskList");
const taskEmpty = document.getElementById("taskEmpty");
const taskFilters = document.getElementById("taskFilters");
const clearCompleted = document.getElementById("clearCompleted");
let activeFilter = "All";
let tasks = readTasks();
// Seed the two tasks requested by the student only when this browser has no saved task list.
if (localStorage.getItem("campusTasks") === null) {
  tasks = [
    { id: "seed-ca-th", title: "CA (TH) Assignment", course: "51004", due: "Not set", priority: "High", completed: false },
    { id: "seed-web-lab", title: "Web Technologies (Lab) Assignment", course: "51003", due: "Not set", priority: "High", completed: false }
  ];
  localStorage.setItem("campusTasks", JSON.stringify(tasks));
}

taskCourse.innerHTML += taskCourses.map(([code, name]) => `<option value="${code}">${code} — ${name}</option>`).join("");
function saveTasks() { localStorage.setItem("campusTasks", JSON.stringify(tasks)); }
function safeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function renderTasks() {
  const filtered = tasks.filter(task => activeFilter === "All" || (activeFilter === "Completed" ? task.completed : !task.completed));
  taskList.innerHTML = filtered.map(task => {
    const courseName = taskCourses.find(course => course[0] === task.course)?.[1] || "Course";
    return `<article class="task-item ${task.completed ? "is-complete" : ""}">
      <label class="task-check"><input type="checkbox" data-action="toggle" data-id="${task.id}" ${task.completed ? "checked" : ""} aria-label="Mark ${safeText(task.title)} complete"><span class="custom-check"></span></label>
      <div class="task-copy"><h3>${safeText(task.title)}</h3><p>${safeText(courseName)} · ${task.due === "Not set" ? "Due date not set" : `Due ${safeText(task.due)}`}</p><div class="task-badges"><span class="priority priority-${task.priority.toLowerCase()}">${task.priority} priority</span><span class="task-state">${task.completed ? "Completed" : "Pending"}</span></div></div>
      <button class="delete-task" data-action="delete" data-id="${task.id}" aria-label="Delete ${safeText(task.title)}" title="Delete task">×</button>
    </article>`;
  }).join("");
  document.getElementById("totalTasks").textContent = tasks.length;
  document.getElementById("pendingTasks").textContent = tasks.filter(task => !task.completed).length;
  document.getElementById("completedTasks").textContent = tasks.filter(task => task.completed).length;
  taskEmpty.classList.toggle("hidden", filtered.length > 0);
  taskEmpty.textContent = tasks.length === 0 ? "No tasks here yet. Add a task to get started." : "No tasks in this filter.";
  clearCompleted.classList.toggle("hidden", !tasks.some(task => task.completed));
  const dashboardPending = document.getElementById("pendingCount");
  if (dashboardPending) dashboardPending.textContent = tasks.filter(task => !task.completed).length;
}
taskForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!taskTitle.value.trim() || !taskCourse.value || !taskDue.value) {
    taskMessage.textContent = "Please complete all required fields.";
    taskMessage.className = "form-message error";
    return;
  }
  tasks.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: taskTitle.value.trim(), course: taskCourse.value, due: taskDue.value,
    priority: taskPriority.value, completed: false
  });
  saveTasks(); renderTasks(); taskForm.reset();
  taskMessage.textContent = "Task added and saved in this browser.";
  taskMessage.className = "form-message success";
});
taskFilters.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  taskFilters.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
  renderTasks();
});
taskList.addEventListener("change", event => {
  const input = event.target.closest('input[data-action="toggle"]');
  if (!input) return;
  const task = tasks.find(item => item.id === input.dataset.id);
  if (task) { task.completed = input.checked; saveTasks(); renderTasks(); }
});
taskList.addEventListener("click", event => {
  const button = event.target.closest('button[data-action="delete"]');
  if (!button) return;
  tasks = tasks.filter(task => task.id !== button.dataset.id);
  saveTasks(); renderTasks();
});
clearCompleted.addEventListener("click", () => {
  tasks = tasks.filter(task => !task.completed);
  saveTasks(); renderTasks();
});
renderTasks();
