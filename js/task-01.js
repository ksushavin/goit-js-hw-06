const categoriesList = document.querySelector("#categories");

const itemsOfCateries = categoriesList.children;
console.log(`Number of categories: ${itemsOfCateries.length}`);

for (const item of itemsOfCateries) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
}

