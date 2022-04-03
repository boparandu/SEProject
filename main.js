function setFormMessage(formElement, type, message) {
    const messsageELement = formElement.querySelector(".form-message");

    messsageELement.textContent = message;

    messsageELement.classList.remove("form__message--success", "form-message-error");
    messsageELement.classList.add('form__message--${type}');
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");

    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";
}



document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    // Show Create Account form when create account link is clicked
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    // Show Log In form when log in link is clicked
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform Log In
        setFormMessage(loginForm, "error", "Invalid School ID/Password.")
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            //input validation for text forms
            if(e.target.id === "loginID" && e.target.value.length > 0 && (e.target.value.length < 9 || e.target.value.length > 9)) {
                setInputError(inputElement, "School ID must be 9 digits")
            }
         });

         inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
         })
    });
});