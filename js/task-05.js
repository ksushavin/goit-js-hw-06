
const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);
console.log(refs.output);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    refs.output.textContent = "Anonymous";
  } else {
    refs.output.textContent = event.currentTarget.value;
  }
}

// Підкажіть, будь-ласка, чому не підставляється "Anonymous" при такому варіанті коду:

// const inputEl = document.querySelector("#name-input");
// const spamEl = document.querySelector("#name-output");

// inputEl.addEventListener("input", (event) => {
//     if (event.currentTarget.value === "") {
//         spamEl.textContent = "Anonymous";
//     }
//     spamEl.textContent = event.currentTarget.value;
// });

