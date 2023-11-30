import handleResult from "./handleResult.js";

export default function handleSubmitForm() {
  const form = document.querySelector("#form");
  const input = document.querySelector("#input");
  const button = document.querySelector("#send");
  const errorMessage = document.querySelector("#errorMessage");

  const submitForm = (e) => {
    e.preventDefault();
    input.blur();
    if (input.value < 0 || input.value % 1 !== 0) {
      input.value = null;
      errorMessage.style.display = "block";
    } else {
      setTimeout(() => {
        handleResult(input.value);
        const result = document.querySelector("#resultSection");
        input.value = null;
        result.style.display = "block";
      }, 300);
    }
    button.setAttribute("disabled", true);
  };

  if (form) {
    form.addEventListener("submit", submitForm);
  }
}