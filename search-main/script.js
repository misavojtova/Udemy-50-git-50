const btn = document.querySelector(".btn");
const search = document.querySelector(".search");

btn.addEventListener("click", function () {
  search.classList.toggle("active");
  input.focus();
});
