// Timetable slots are generated from the class order supplied by the student.
const timetable = [
  { day: "Monday", items: [
    ["HCI & CG (TH)", "theory"], ["HCI & CG (TH)", "theory"], ["Tutorial", "tutorial"],
    ["Web Technologies Lab", "lab"], ["Break", "break", 15],
    ["Web Technologies Lab", "lab"], ["Web Technologies Lab", "lab"]
  ]},
  { day: "Tuesday", items: [
    ["HCI & CG (LAB)", "lab"], ["HCI & CG (LAB)", "lab"], ["HCI & CG (LAB)", "lab"],
    ["Mobile App Development Lab", "lab"], ["Break", "break", 15],
    ["Mobile App Development Lab", "lab"], ["Mobile App Development Lab", "lab"]
  ]},
  { day: "Wednesday", items: [
    ["Computer Architecture (TH)", "theory"], ["Computer Architecture (TH)", "theory"],
    ["Introduction to Management", "theory"], ["Introduction to Management", "theory"], ["Break", "break", 15],
    ["Operating System (TH)", "theory"], ["Operating System (TH)", "theory"]
  ]},
  { day: "Thursday", items: [
    ["Web Technologies (TH)", "theory"], ["Web Technologies (TH)", "theory"], ["Tutorial", "tutorial"],
    ["Operating System Lab", "lab"], ["Break", "break", 15],
    ["Operating System Lab", "lab"], ["Operating System Lab", "lab"]
  ]},
  { day: "Friday", items: [
    ["Computer Architecture Lab", "lab"], ["Computer Architecture Lab", "lab"], ["Computer Architecture Lab", "lab"],
    ["Mobile App Development (TH)", "theory"], ["Namaz break", "break", 65], ["Mobile App Development (TH)", "theory"]
  ]}
];

function addMinutes(time, minutes) {
  const [hours, mins] = time.split(":").map(Number);
  const date = new Date(2000, 0, 1, hours, mins + minutes);
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}
function toMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}
function fromMinutes(total) {
  const h = Math.floor(total / 60);
  const m = total % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
function displayTime(total) {
  const date = new Date(2000, 0, 1, Math.floor(total / 60), total % 60);
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}
const scheduleGrid = document.getElementById("scheduleGrid");
const startAt = 9 * 60 + 15;
const instructorFor = (title, type) => {
  if (title.startsWith("HCI & CG")) return type === "lab" ? "Mrs Ayesha Maqsood" : "Mr Zafar Iqbal Khan";
  if (title.startsWith("Operating System")) return type === "lab" ? "Mr Hussain Gallani" : "Mr Massood";
  if (title.startsWith("Web Technologies")) return type === "lab" ? "Mr Hussain Gallani" : "Mr Hussain Gallani";
  if (title.startsWith("Computer Architecture")) return type === "lab" ? "Mrs Muneeba Mubarik" : "Mrs Sehrish Khan Tayyaba";
  if (title.startsWith("Mobile App Development")) return "Mr Uzair Hassan";
  if (title.startsWith("Introduction to Management")) return "Mrs Mufleha Adeel";
  return "";
};
scheduleGrid.innerHTML = timetable.map(day => {
  let cursor = startAt;
  const cards = day.items.map(([title, type, customDuration]) => {
    const duration = customDuration || 50;
    const start = displayTime(cursor);
    cursor += duration;
    const end = displayTime(cursor);
    const instructor = instructorFor(title, type);
    return `<article class="schedule-slot ${type}"><span class="slot-time">${start} – ${end}</span><strong>${title}</strong><small>${type === "theory" ? "Theory lecture" : type === "lab" ? "Lab lecture" : type === "tutorial" ? "Tutorial" : (title === "Namaz break" ? "Break · 1 hr 5 min" : title === "Break" ? "Break · 15 min" : "Break")}</small>${instructor ? `<small class="slot-instructor">Instructor: ${instructor}</small>` : ""}</article>`;
  }).join("");
  const end = displayTime(cursor);
  return `<section class="day-column"><div class="day-heading"><h3>${day.day}</h3><span>${day.items.length} slots</span></div><div class="day-slots">${cards}</div><div class="day-end">Calculated finish: <strong>${end}</strong></div></section>`;
}).join("");
