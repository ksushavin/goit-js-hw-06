const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

// Варіант №1
const firstItem = document.createElement('li');
firstItem.classList.add("item");
firstItem.textContent = 'Potatoes';
ingredientsEl.append(firstItem);

const secondItem = document.createElement('li');
secondItem.classList.add("item");
secondItem.textContent = 'Mushrooms';
ingredientsEl.append(secondItem);

const thirdItem = document.createElement('li');
thirdItem.classList.add("item");
thirdItem.textContent = 'Garlic';
ingredientsEl.append(thirdItem);

const fourthItem = document.createElement('li');
fourthItem.classList.add("item");
fourthItem.textContent = 'Tomatos';
ingredientsEl.append(fourthItem);

const fifthItem = document.createElement('li');
fifthItem.classList.add("item");
fifthItem.textContent = 'Herbs';
ingredientsEl.append(fifthItem);

const sixthItem = document.createElement('li');
sixthItem .classList.add("item");
sixthItem .textContent = 'Condiments';
ingredientsEl.append(sixthItem );



// Варіант №2

// for (const ingredient of ingredients) {
//   const item = document.createElement('li');

//   item.classList.add("item");
//   item.textContent = ingredient;
 
//   ingredientsEl.append(item);
  
// }


