const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const itemContent = (item) => {
  const createItem = document.createElement("li");
  createItem.textContent = item;
  return createItem;
};

const renderItem = (items) => {
  const itemEl = items.map((item) => itemContent(item));
  ingredientsRef.append(...itemEl);
};
renderItem(ingredients);
