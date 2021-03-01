const controlInputRef = document.querySelector('input[type="number"]');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxLayout = document.querySelector("#boxes");

const randomNumber = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));

function randomRBG() {
  const r = randomNumber(0, 255);
  const g = randomNumber(0, 255);
  const b = randomNumber(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function createBoxes(amount) {
  let baseWidth = 20;
  let baseHeight = 20;

  for (let i = 0; i < amount; i++) {
    baseWidth += 10;
    baseHeight += 10;

    const newBox = document.createElement("div");
    newBox.style.backgroundColor = randomRBG();
    newBox.style.width = baseWidth + "px";
    newBox.style.height = baseHeight + "px";
    newBox.style.marginBottom = "10px";
    boxLayout.append(newBox);

    controlInputRef.value = "";
  }
}

function handleClick() {
  createBoxes(controlInputRef.value);
}

function destroyBoxes() {
  boxLayout.textContent = "";
}

renderBtnRef.addEventListener("click", handleClick);
destroyBtnRef.addEventListener("click", destroyBoxes);
