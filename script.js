//Loader
window.addEventListener("load", (event) => {
  let loader = document.getElementById("loader");
  loader.style.display = "none";
});
//Navigation collapse button
let checkBox = document.getElementById("check");
let collapse = document.getElementById("collapse");

collapse.addEventListener("click", () => {
  checkBox.checked = false;
});

//Horizontal scroll menu
let buttonLeft = document.getElementById("button-left");
let buttonRight = document.getElementById("button-right");
let scrollMenu = document.getElementsByClassName("horizontal-scroll")[0];
let skills = document.getElementsByClassName("skill");

buttonLeft.addEventListener("click", () => {
  let scrollRange = scrollMenu.scrollWidth / skills.length;
  scrollMenu.scrollBy(-scrollRange, 0);
});

buttonRight.addEventListener("click", () => {
  let scrollRange = scrollMenu.scrollWidth / skills.length;
  scrollMenu.scrollBy(scrollRange, 0);
});

setInterval(() => {
  let scrollRange = scrollMenu.scrollWidth / skills.length;
  if (scrollMenu.scrollWidth <= skills[0].offsetWidth + scrollMenu.scrollLeft) {
    scrollMenu.scrollBy(-scrollMenu.scrollLeft, 0);
  } else {
    scrollMenu.scrollBy(scrollRange, 0);
  }
}, 3500);
