const buttons = document.querySelectorAll(".faq-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    button.parentNode.classList.toggle("active");
  });
});
