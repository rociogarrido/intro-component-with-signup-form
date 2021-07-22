"use strict";

// Variables to get the HTML elements for the form's input boxes.

let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");

//form.addEventListener("submit", validateForm());

// Function to check and ensure the email contains at least one character, an @ symbol, then a non whitespace character.
function validEmail(email) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

function validateForm(ev) {
  if (!firstName.value) {
    firstName.classList.add("error");
    firstName.nextElementSibling.classList.add("show");
  }
  if (!lastName.value) {
    lastName.classList.add("error");
    lastName.nextElementSibling.classList.add("show");
  }
  if (!email.value || !validEmail(email.value)) {
    email.classList.add("error");
    email.nextElementSibling.classList.add("show");
  }
  if (!password.value) {
    password.classList.add("error");
    password.nextElementSibling.classList.add("show");
  }
}

//Everytime user types something in the input boxes, we check if the form fields are valid.
document.querySelectorAll("input").forEach((element) => {
  element.addEventListener("focus", () => {
    element.classList.remove("error");
    element.nextElementSibling.classList.remove("show");
  });
});
