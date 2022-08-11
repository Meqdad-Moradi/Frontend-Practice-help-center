const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const header = document.getElementById("header");
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("DOMContentLoaded", () => {
   document.documentElement.style.setProperty(
      "--header-heigth",
      headerHeight + "px"
   );
});

const toggleNavBtn = document.getElementById("toggle-nav");
const headerNav = document.getElementById("header-nav");

toggleNavBtn.addEventListener("click", (e) => {
   headerNav.classList.toggle("active");
   e.currentTarget.classList.toggle("active");
});
