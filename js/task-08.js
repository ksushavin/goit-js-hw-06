const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
        alert("Please, fill in all the fields!");
    } else {
        const userData = {
            email,
            password,
        };
        console.log(userData);     
        event.currentTarget.reset();
    }
}