const form = document.querySelector(".feedback-form");
const formData = "feedback-form-state";

function saveFormItem(event) {
  event.preventDefault();
  const formList = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  console.log("merhaba");
  const formDataString = JSON.stringify(formList);
  localStorage.setItem(formData, formDataString);
}

form.addEventListener("submit", saveFormItem);
