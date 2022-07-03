
const validationInputEl = document.querySelector("#validation-input");

const inputValidationLength = Number(validationInputEl.dataset.length);
 
validationInputEl.addEventListener("blur", onInputValidate);

function onInputValidate(event) {
    const input = event.currentTarget;
    const inputCls = event.currentTarget.classList;
    
    if (input.value.length === inputValidationLength) {
        inputCls.remove("invalid");
        return inputCls.add("valid");
    }
    inputCls.remove("valid");
    return inputCls.add("invalid");
};

