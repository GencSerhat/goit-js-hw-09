const form = document.querySelector(".feedback-form");
const formData = "feedback-form-state";

export function saveFormItem(event) {
  event.preventDefault();
  const formList = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  const formDataString = JSON.stringify(formList);
  if (formList.email !== "" && formList.message !== "") {
    localStorage.setItem(formData, formDataString);
    form.reset();

    window.location.href = "feedback.html"; //feedback.html e gider.
  } else {
    console.log("Email veya mesaj bölümünü boş bırakmayınız !");
  }
}

form.addEventListener("submit", saveFormItem);
