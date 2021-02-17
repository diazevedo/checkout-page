const $removeButtons = document.querySelectorAll(".icon-button.remove");
const $addButtons = document.querySelectorAll(".icon-button.add");

document.addEventListener("DOMContentLoaded", () => {
  $removeButtons.forEach((element) => {
    element.addEventListener("click", decreaseQuantity);
  });

  $addButtons.forEach((element) => {
    element.addEventListener("click", increaseQuantity);
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
