/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

const message =
  "Thank you for submitting your request. The crew will respond shortly.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
