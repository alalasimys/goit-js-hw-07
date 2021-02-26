const fontSizeInputRangeRef = document.getElementById("font-size-control");
const inputRangedTextRef = document.querySelector("#text");

fontSizeInputRangeRef.addEventListener("input", onRangeText);
function onRangeText(event) {
  return (inputRangedTextRef.style.fontSize = event.currentTarget.value + "px");
}
