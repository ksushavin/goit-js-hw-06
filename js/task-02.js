const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const itemsArray = ingredients
  .map(ingredient => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = `${ingredient}`;

    console.log(item);
    return item;
  });

ingredientsEl.append(...itemsArray);
