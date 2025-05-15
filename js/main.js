const nav = document.querySelector(".header__navbar");
const btn = document.querySelector(".header__btn");
const link = document.querySelectorAll(".navbar__link");

btn.addEventListener("click", (event) => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});

link.forEach((link) =>
  link.addEventListener("click", (event) => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      btn.classList.remove("active");
    }
  })
);

document.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !btn.contains(event.target)) {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      btn.classList.remove("active");
    }
  }
});

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
