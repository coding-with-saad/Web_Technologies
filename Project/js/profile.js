// Client-side form validation only. No data is sent to a server.
const profileForm = document.getElementById("profileForm");
const profileMessage = document.getElementById("profileMessage");
const fields = ["fullName", "regNo", "email", "department", "semester", "phone", "password", "confirmPassword"];

function setError(fieldId, message) {
  document.getElementById(`${fieldId}Error`).textContent = message;
  document.getElementById(fieldId).classList.toggle("input-error", Boolean(message));
}
profileForm.addEventListener("submit", event => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(profileForm).entries());
  fields.forEach(id => setError(id, ""));
  let valid = true;
  if (values.fullName.trim().length < 3) { setError("fullName", "Enter your full name."); valid = false; }
  if (!values.regNo.trim()) { setError("regNo", "Registration number is required."); valid = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) { setError("email", "Enter a valid email address."); valid = false; }
  if (!values.department.trim()) { setError("department", "Department is required."); valid = false; }
  if (!values.semester) { setError("semester", "Select your semester."); valid = false; }
  if (!/^[0-9+\-\s()]{7,20}$/.test(values.phone.trim())) { setError("phone", "Enter a valid phone number."); valid = false; }
  if (values.password.length < 8) { setError("password", "Use at least 8 characters."); valid = false; }
  if (values.confirmPassword !== values.password || !values.confirmPassword) { setError("confirmPassword", "Passwords must match."); valid = false; }
  if (valid) {
    profileMessage.textContent = "Validation successful! This is a demo; no information was sent or saved.";
    profileMessage.className = "form-message success";
  } else {
    profileMessage.textContent = "Please correct the highlighted fields.";
    profileMessage.className = "form-message error";
  }
});

// Show/hide password buttons for easier typing.
document.querySelectorAll("[data-password-target]").forEach(button => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.passwordTarget);
    const willShow = input.type === "password";
    input.type = willShow ? "text" : "password";
    button.setAttribute("aria-label", willShow ? "Hide password" : "Show password");
    button.setAttribute("aria-pressed", String(willShow));
    button.textContent = willShow ? "⊘" : "◉";
  });
});
