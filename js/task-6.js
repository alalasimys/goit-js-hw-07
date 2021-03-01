const inputWithValidation = document.querySelector("#validation-input");

inputWithValidation.addEventListener("click", inputWithValidation.onblur);
inputWithValidation.addEventListener("click", inputWithValidation.onfocus);

inputWithValidation.onblur = function (event) {
  event.currentTarget.value.length == inputWithValidation.dataset.length
    ? this.classList.add("valid")
    : this.classList.add("invalid");
};

inputWithValidation.onfocus = function (event) {
  event.currentTarget.value.length == inputWithValidation.dataset.length
    ? this.classList.remove("valid")
    : this.classList.remove("invalid");
};
