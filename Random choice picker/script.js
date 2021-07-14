const tagsEl = document.getElementById("tags");
const textAr = document.getElementById("textarea");

textAr.focus();
textAr.addEventListener("keyup", (event) => {
  createTags(event.target.value);

  if (event.key === "Enter") {
    setTimeout(() => {
      event.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    hLight(randomTag);

    setTimeout(() => {
      unLight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const anotherRandomTag = pickRandomTag();
      hLight(anotherRandomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const rtags = document.querySelectorAll(".tag");
  return rtags[Math.floor(Math.random() * rtags.length)];
}

function hLight(t) {
  t.classList.add("light");
}
function unLight(t) {
  t.classList.remove("light");
}
