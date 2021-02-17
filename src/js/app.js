const $removeButtons = document.querySelectorAll(".icon-button.remove");
const $addButtons = document.querySelectorAll(".icon-button.add");
const $form = document.querySelector("form");
const $formFields = document.querySelectorAll(
  "form input[type=text], form input[type=number], form select"
);

const $messageError = document.querySelector(".error-text");
const $messageSuccess = document.querySelector(".success-text");

document.addEventListener("DOMContentLoaded", () => {
  $removeButtons.forEach((element) => {
    element.addEventListener("click", decreaseQuantity);
  });

  $addButtons.forEach((element) => {
    element.addEventListener("click", increaseQuantity);
  });

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    var isInputEmpty = false;

    $formFields.forEach((element) => {
      if (element.value === "") {
        isInputEmpty = true;
        element.parentElement.classList.add("error");
        $messageError.classList.add("show");
      } else {
        element.parentElement.classList.remove("error");
      }
    });

    if (isInputEmpty) {
      return;
    }

    removeErrorFromInputs();
    $messageError.classList.remove("show");
    $messageSuccess.classList.toggle("show");
  });
});

const decreaseQuantity = (event) => {
  const inputQuantity = event.target.nextElementSibling;

  if (inputQuantity.value == 0) {
    return;
  }

  inputQuantity.value = inputQuantity.value - 1;
};

const increaseQuantity = (event) => {
  const inputQuantity = event.target.previousElementSibling;
  inputQuantity.value = ++inputQuantity.value;
};

const removeErrorFromInputs = () => {
  const $errors = document.querySelectorAll(".error");
  $errors.forEach((element) => {
    error.classList.toggle("error");
  });
};
