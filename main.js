"use strict";

// Variables to get the HTML elements for the form's input boxes.
const firstName = document.querySelector("fname");
const lastName = document.querySelector("lname");
const email = document.querySelector("email");
const password = document.querySelector("password");

function isEmpty(value) {
  return value.length == 0;
}

// Function to check and ensure the email contains at least one character, an @ symbol, then a non whitespace character.
function validEmail(email) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

// Everytime user types something in the input boxes, we check if the form fields are valid.
document.querySelectorAll("input").forEach((element) => {
  element.addEventListener("focus", () => {
    element.classList.remove("error");
    element.nextElementSibling.classList.remove("show");
  });
});

function validateForm() {
  // Validate first name.
  if (isEmpty(firstName.value)) {
    firstName.classList.add("error"); // If the field is empty, display the following error message.
    firstName.nextElementSibling.classList.add("show");
  }
  // Validate last name
  if (isEmpty(lastName.value)) {
    lastName.classList.add("error");
    lastName.nextElementSibling.classList.add("show");
  }
  // Validate email
  if (isEmpty(email.value) || !validEmail(email.value)) {
    email.classList.add("error");
    email.nextElementSibling.classList.add("show");
  }
  // Validate password
  if (isEmpty(password.value)) {
    password.classList.add("error");
    password.nextElementSibling.classList.add("show");
  }
}

/*const buttonElement = document.querySelector("btn");

function handleButtonClick(ev) {
  ev.preventDefault(); // first, we prevent the form from being sent by canceling the event;
  validateForm(); // then, we validate the form;
}

buttonElement.addEventListener("click", handleButtonClick);*/

form.addEventListener("submit", () => {
  ev.preventDefault();
  validateForm();
});
