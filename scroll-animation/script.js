const content = document.querySelectorAll(".content");

window.addEventListener("scroll", checkContent);

checkContent();

function checkContent() {
  const triggerbottom = (window.innerHeight / 4.8) * 4;

  content.forEach((cont) => {
    const contentTop = cont.getBoundingClientRect().top;

    if (contentTop < triggerbottom) {
      cont.classList.add("show");
    } else {
      cont.classList.remove("show");
    }

    console.log(contentTop);
    console.log(triggerbottom);
  });
}
