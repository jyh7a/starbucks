const searchEL = document.querySelector(".search");
const searchInputEl = searchEL.querySelector("input");

searchEL.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEL.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
  searchEL.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
  searchInputEl.value = "";
});

const thisYear = document.querySelector(".copyright .this-year");
thisYear.textContent = new Date().getFullYear();
