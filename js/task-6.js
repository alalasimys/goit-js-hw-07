const inputWithValidation = document.querySelector("#validation-input");

function onChangeInput(event) {
  if (event.currentTarget.value.length < inputWithValidation.dataset.length) {
    return inputWithValidation.classList.add("invalid");
  }
  inputWithValidation.classList.remove("invalid");
  return inputWithValidation.classList.add("valid");
}

inputWithValidation.addEventListener("input", onChangeInput);
