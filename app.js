const menuBtn = document.querySelector("#menu-btn");
const menus = document.querySelector("#menus");

function toggleMenus() {
  menuBtn.classList.toggle("open");
  menus.classList.toggle("flex");
  menus.classList.toggle("hidden");
}

menuBtn.addEventListener("click", toggleMenus);

window.addEventListener("resize", () => {
  if (menuBtn.classList.contains("open")) toggleMenus();
});
