const form = document.querySelector(".feedback-form");
const formData = "feedback-form-state";

window.addEventListener("DOMContentLoaded", () => {
  const savedDataString = localStorage.getItem(formData); // JSON string'i aldım.

  if (savedDataString) {
    const savedData = JSON.parse(savedDataString); // JSON string'i nesneye çevirdim
    form.elements.email.value = savedData.email || ""; // Email alanını doldur
    form.elements.message.value = savedData.message || ""; // Message alanını doldur
  }
});
