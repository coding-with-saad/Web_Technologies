# Smart Campus Student Portal

A responsive front-end project for the Web Technology assignment. Built with **HTML5, CSS3, and vanilla JavaScript**. No backend or framework is required.

## Pages

- `index.html` — dashboard, campus announcements, upcoming events, quick access
- `courses.html` — six course cards generated from a JavaScript array, live search and filters
- `schedule.html` — weekly timetable generated from the supplied class sequence
- `tasks.html` — add, complete, filter, and delete tasks; tasks persist with `localStorage`
- `profile.html` — registration/profile form with client-side validation only

## Run the project

1. Extract the project folder.
2. Open `index.html` in a modern browser.
3. For a smoother development workflow, open the folder in VS Code and use the Live Server extension if available.

No package installation or build step is required.

## Important notes

- The course codes and names are based on the student's supplied list.
- Instructor names are shown separately for theory and lab where applicable, using the names supplied by the student. Credit hours remain **Not provided** because they were not supplied.
- Attendance is shown as 88%, as requested by the student.
- Event dates: Sports Week, 19–23 October 2026; previous batch convocation, 27–28 October 2026; midterms in November, exact date to be announced.
- The timetable calculates 50-minute slots from 9:15 AM, includes 15-minute breaks after the fourth slot Monday–Thursday, and a 65-minute Friday Namaz break. With these break durations, the calculated finish is 2:30 PM each day, matching the stated dismissal time.
- Profile validation does not send or save personal data. Password fields are intentionally blank on page load; use the show/hide controls to check typing. Tasks and theme preference are saved locally in the browser.

## Main concepts demonstrated

Variables, arrays, objects, functions, loops, conditionals, DOM selection, event listeners, dynamic HTML rendering, search/filter, form validation, responsive CSS Grid/Flexbox, CSS media queries, and `localStorage`.


**Credit hours:** Courses with theory and lab use 2 theory credit hours + 1 lab credit hour. Introduction to Management is marked theory-only (2 theory credit hours) because no lab was listed.
