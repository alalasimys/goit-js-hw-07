const inputRef = document.querySelector("#name-input");
const changedValue = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (!event.currentTarget.value.trim()) {
    return (changedValue.textContent = "незнакомец");
  }
  changedValue.textContent = event.currentTarget.value;
}
