let counterValue = document.querySelector("#value");
let btnDecrementRef = document.querySelector('button[data-action="decrement"]');
let btnIncrementRef = document.querySelector('button[data-action="increment"]');

btnDecrementRef.addEventListener("click", () => counterValue.textContent--);
btnIncrementRef.addEventListener("click", () => counterValue.textContent++);
