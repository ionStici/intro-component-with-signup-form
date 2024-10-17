"use strict";

// ELEMENTS
const form = document.querySelector(".form");
const btn = document.querySelector(".form__btn");
const header = document.querySelector(".header");

const inputFirstName = document.querySelector(".input-first-name");
const inputLastName = document.querySelector(".input-last-name");
const inputEmail = document.querySelector(".input-email");
const inputPassword = document.querySelector(".input-password");

const firstNameErrorIcon = inputFirstName.nextElementSibling;
const firstNameErrorMessage = firstNameErrorIcon.nextElementSibling;

const lastNameErrorIcon = inputLastName.nextElementSibling;
const lastNameErrorMessage = lastNameErrorIcon.nextElementSibling;

const emailErrorIcon = inputEmail.nextElementSibling;
const emailErrorMessage = emailErrorIcon.nextElementSibling;

const passwordErrorIcon = inputPassword.nextElementSibling;
const passwordErrorMessage = passwordErrorIcon.nextElementSibling;

// CHECK IF EMAIL IS VALID
function checkIfEmailIsValid(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    // Valid
    return true;
  } else {
    // Invalid
    return false;
  }
}

// ERROR FUNCTIONS
const fnEmptyError = function (status) {
  if (!status) {
    inputFirstName.style.border = "2px solid #ff7979";
    inputFirstName.style.margin = "0";
    firstNameErrorIcon.style.opacity = "1";
    firstNameErrorMessage.style.opacity = "1";
  } else {
    inputFirstName.style.border = "1px solid #dedede";
    inputFirstName.style.margin = "1px";
    firstNameErrorIcon.style.opacity = "0";
    firstNameErrorMessage.style.opacity = "0";
  }
};

const lnEmptyError = function (status) {
  if (!status) {
    inputLastName.style.border = "2px solid #ff7979";
    inputLastName.style.margin = "0";
    lastNameErrorIcon.style.opacity = "1";
    lastNameErrorMessage.style.opacity = "1";
  } else {
    inputLastName.style.border = "1px solid #dedede";
    inputLastName.style.margin = "1px";
    lastNameErrorIcon.style.opacity = "0";
    lastNameErrorMessage.style.opacity = "0";
  }
};

const emailError = function (status) {
  if (!status) {
    inputEmail.style.border = "2px solid #ff7979";
    inputEmail.style.margin = "0";
    emailErrorIcon.style.opacity = "1";
    emailErrorMessage.style.opacity = "1";
  } else {
    inputEmail.style.border = "1px solid #dedede";
    inputEmail.style.margin = "1px";
    emailErrorIcon.style.opacity = "0";
    emailErrorMessage.style.opacity = "0";
  }
};

const passwordEmptyError = function (status) {
  if (!status) {
    inputPassword.style.border = "2px solid #ff7979";
    inputPassword.style.margin = "0";
    passwordErrorIcon.style.opacity = "1";
    passwordErrorMessage.style.opacity = "1";
  } else {
    inputPassword.style.border = "1px solid #dedede";
    inputPassword.style.margin = "1px";
    passwordErrorIcon.style.opacity = "0";
    passwordErrorMessage.style.opacity = "0";
  }
};

// FORM CONTROLLER
const formController = function (e) {
  e.preventDefault();

  if (!inputFirstName.value) fnEmptyError(false);
  if (inputFirstName.value) fnEmptyError(true);

  if (!inputLastName.value) lnEmptyError(false);
  if (inputLastName.value) lnEmptyError(true);

  if (!checkIfEmailIsValid(inputEmail.value)) emailError(false);
  if (checkIfEmailIsValid(inputEmail.value)) emailError(true);

  if (!inputPassword.value) passwordEmptyError(false);
  if (inputPassword.value) passwordEmptyError(true);

  if (
    inputFirstName.value &&
    inputLastName.value &&
    checkIfEmailIsValid(inputEmail.value) &&
    inputPassword.value
  ) {
    const firstName = inputFirstName.value;

    setTimeout(() => {
      document.documentElement.style.setProperty(
        "--color-input-placeholder",
        "rgba(61, 59, 72, 0.35)"
      );
      inputFirstName.value = "";
      inputFirstName.setAttribute("readonly", "readonly");

      inputLastName.value = "";
      inputLastName.setAttribute("readonly", "readonly");

      inputEmail.value = "";
      inputEmail.setAttribute("readonly", "readonly");

      inputPassword.value = "";
      inputPassword.setAttribute("readonly", "readonly");

      btn.style.backgroundColor = "#ccc";

      header.innerHTML = ``;
      header.insertAdjacentHTML(
        "afterbegin",
        `
                <h1 class="h1" style="color: rgba(61, 59, 72, 0.75);">Hey ${firstName}, <br> check your email!</h1>
            `
      );
    }, 500);

    form.removeEventListener("submit", formController);
    btn.removeEventListener("click", formController);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
    });
    btn.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
};

form.addEventListener("submit", formController);
btn.addEventListener("click", formController);
