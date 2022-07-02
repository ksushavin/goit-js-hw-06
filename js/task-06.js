
const validationInputEl = document.querySelector("#validation-input");

const inputValidationLength = Number(validationInputEl.dataset.length);
 
validationInputEl.addEventListener("blur", onInputValidate);

function onInputValidate(event) {
    
    if (event.currentTarget.value.length === inputValidationLength) {
        event.currentTarget.classList.remove("invalid");
        return event.currentTarget.classList.add("valid");
      
    }
    event.currentTarget.classList.remove("valid");
    return event.currentTarget.classList.add("invalid");
};

