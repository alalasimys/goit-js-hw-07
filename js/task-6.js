const inputWithValidation = document.querySelector("#validation-input");

inputWithValidation.onblur = function (event) {
  event.currentTarget.value.length < inputWithValidation.dataset.length
    ? this.classList.add("invalid")
    : this.classList.add("valid");
};

inputWithValidation.onfocus = function (event) {
  event.currentTarget.value.length < inputWithValidation.dataset.length
    ? this.classList.remove("invalid")
    : this.classList.remove("valid");
};
