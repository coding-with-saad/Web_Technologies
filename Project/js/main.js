// Shared JavaScript for navigation, theme, date, and announcements.
const themeToggle = document.getElementById("themeToggle");
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

function applyTheme(theme) {
  document.body.classList.toggle("dark-theme", theme === "dark");
  if (themeToggle) {
    themeToggle.innerHTML = theme === "dark" ? "☀ <span>Light mode</span>" : "◐ <span>Dark mode</span>";
  }
}

const savedTheme = localStorage.getItem("campusTheme") || "light";
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
    localStorage.setItem("campusTheme", nextTheme);
    applyTheme(nextTheme);
  });
}

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const dateElement = document.getElementById("currentDate");
if (dateElement) {
  dateElement.textContent = new Intl.DateTimeFormat("en-PK", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  }).format(new Date());
}

// Announcements are stored as objects and rendered dynamically.
const announcements = [
  { title: "Welcome to the Smart Campus Portal", category: "General", date: "Portal update", text: "Use this demo portal to explore courses, your timetable, tasks, and student registration validation." },
  { title: "Midterm examinations planned for November", category: "Examination", date: "Date to be announced", text: "The exact midterm examination date has not been provided yet. Check official campus updates for confirmation." },
  { title: "Sports Week is coming up", category: "Event", date: "19–23 October 2026", text: "Sports Week is listed for 19 to 23 October 2026." },
  { title: "Previous batch convocation", category: "Event", date: "27–28 October 2026", text: "The previous batch convocation is listed for 27 and 28 October 2026." },
  { title: "Semester course list", category: "Academic", date: "5th semester", text: "Six courses are currently listed in the course catalogue for this semester." }
];

const announcementList = document.getElementById("announcementList");
const announcementFilters = document.getElementById("announcementFilters");

function renderAnnouncements(category = "All") {
  if (!announcementList) return;
  const filtered = category === "All" ? announcements : announcements.filter(item => item.category === category);
  announcementList.innerHTML = filtered.map(item => `
    <article class="announcement-item">
      <div class="announcement-marker ${item.category.toLowerCase()}">${item.category === "Event" ? "✦" : item.category === "Examination" ? "▣" : item.category === "Academic" ? "▤" : "i"}</div>
      <div class="announcement-copy"><div class="announcement-meta"><span class="category-label ${item.category.toLowerCase()}">${item.category}</span><span>${item.date}</span></div><h3>${item.title}</h3><p>${item.text}</p></div>
    </article>`).join("");
}
if (announcementList) renderAnnouncements();
if (announcementFilters) {
  announcementFilters.addEventListener("click", event => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    announcementFilters.querySelectorAll("button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderAnnouncements(button.dataset.category);
  });
}

function readTasks() {
  try { return JSON.parse(localStorage.getItem("campusTasks") || "[]"); }
  catch { return []; }
}
const pendingCount = document.getElementById("pendingCount");
if (pendingCount) pendingCount.textContent = readTasks().filter(task => !task.completed).length;
