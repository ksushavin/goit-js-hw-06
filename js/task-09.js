const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const spamBodyColor = document.querySelector(".color");

buttonEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {

  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  bodyEl.style.backgroundColor = color;
  spamBodyColor.textContent = `- ${color}`;

  return color;
}

  

 

