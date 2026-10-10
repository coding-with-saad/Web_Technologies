// Course objects are kept in an array and cards are generated with JavaScript.
const courses = [
  { code: "51001", name: "HCI & CG", instructors: { theory: "Mr Zafar Iqbal Khan", lab: "Mrs Ayesha Maqsood" }, creditHours: "2 Theory + 1 Lab", semester: 5, status: "Current", components: "Theory + Lab" },
  { code: "51002", name: "Operating System", instructors: { theory: "Mr Massood", lab: "Mr Hussain Gallani" }, creditHours: "2 Theory + 1 Lab", semester: 5, status: "Current", components: "Theory + Lab" },
  { code: "51003", name: "Web Technologies", instructors: { theory: "Mr Hussain Gallani", lab: "Mr Hussain Gallani" }, creditHours: "2 Theory + 1 Lab", semester: 5, status: "Current", components: "Theory + Lab" },
  { code: "51004", name: "Computer Architecture", instructors: { theory: "Mrs Sehrish Khan Tayyaba", lab: "Mrs Muneeba Mubarik" }, creditHours: "2 Theory + 1 Lab", semester: 5, status: "Current", components: "Theory + Lab" },
  { code: "51005", name: "Mobile App Development", instructors: { theory: "Mr Uzair Hassan", lab: "Mr Uzair Hassan" }, creditHours: "2 Theory + 1 Lab", semester: 5, status: "Current", components: "Theory + Lab" },
  { code: "51006", name: "Introduction to Management", instructors: { theory: "Mrs Mufleha Adeel", lab: null }, creditHours: "2 Theory", semester: 5, status: "Current", components: "Theory" }
];

const courseGrid = document.getElementById("courseGrid");
const courseSearch = document.getElementById("courseSearch");
const semesterFilter = document.getElementById("semesterFilter");
const statusFilter = document.getElementById("statusFilter");
const courseResults = document.getElementById("courseResults");
const noCourses = document.getElementById("noCourses");
const courseIcons = ["◈", "⌘", "〈/〉", "▦", "▣", "↗"];

function renderCourses() {
  const query = courseSearch.value.trim().toLowerCase();
  const semester = semesterFilter.value;
  const status = statusFilter.value;
  const filtered = courses.filter(course =>
    (course.name.toLowerCase().includes(query) || course.code.toLowerCase().includes(query)) &&
    (semester === "All" || String(course.semester) === semester) &&
    (status === "All" || course.status === status)
  );
  courseGrid.innerHTML = filtered.map(course => {
    const index = courses.indexOf(course);
    return `<article class="course-card">
      <div class="course-card-top"><span class="course-icon course-icon-${index + 1}">${courseIcons[index]}</span><span class="pill pill-green">${course.status}</span></div>
      <p class="course-code">COURSE ${course.code}</p><h2>${course.name}</h2>
      <p class="course-component">${course.components}</p>
      <div class="course-details"><div><span>Semester</span><strong>${course.semester}th</strong></div><div><span>Credit hours</span><strong>${course.creditHours}</strong></div></div>
      <div class="course-instructor"><span class="mini-avatar">i</span><span><small>Instructor</small><strong>Theory: ${course.instructors.theory || "Not provided"}</strong>${course.instructors.lab ? `<strong>Lab: ${course.instructors.lab}</strong>` : ""}</span></div>
    </article>`;
  }).join("");
  courseResults.textContent = `Showing ${filtered.length} of ${courses.length} courses`;
  noCourses.classList.toggle("hidden", filtered.length !== 0);
}
[courseSearch, semesterFilter, statusFilter].forEach(control => control.addEventListener("input", renderCourses));
renderCourses();
