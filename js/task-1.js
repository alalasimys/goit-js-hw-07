const allCategoriesRef = document.querySelectorAll(".item");
console.log(`В списке ${allCategoriesRef.length} категории.`);

allCategoriesRef.forEach((item) =>
  console.log(
    `Категория: ${
      item.querySelector("h2").textContent
    }, Количество элементов: ${item.querySelectorAll("li").length}`
  )
);
