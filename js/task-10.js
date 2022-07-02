const refs = {
  divBoxes: document.querySelector("#boxes"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  inputAmount: document.querySelector("#controls > input"),
}

refs.createBtn.addEventListener("click", onCreateBoxClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);



function onCreateBoxClick() {
  refs.divBoxes.innerHTML = "";
  let boxWidth = 0;
 
for (let i = 0; i < refs.inputAmount.value; i += 1) {
  boxWidth += 10;
  
  const box = document.createElement("div");
  // console.log(box.style);
  
  box.classList.add(`id${i}`);
  box.style.width = `${boxWidth}px`;
  box.style.height = `${boxWidth}px`;
  box.style.backgroundColor = getRandomHexColor();
  box.style.border = "2px";
  box.style.borderColor = "#6be4cd";
    
  refs.divBoxes.append(box);
} 
}

function onDestroyBtnClick(event) {
  refs.inputAmount.value = "";
  refs.divBoxes.innerHTML = "";
  boxWidth = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
