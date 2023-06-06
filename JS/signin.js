const mainMenu = document.querySelector(".mainMenu");
const closemenu = document.querySelector(".closeMenu");
const openmenu = document.querySelector(".openMenu");

//  FOR THE HAMBURGER MENU.

openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.right = "100";
  openmenu.style.display = "none";
  closemenu.style.display = "block";
}

function close() {
  mainMenu.style.right = "-100";
  mainMenu.style.display = "none";
  openmenu.style.display = "block";
  closemenu.style.display = "none";
}
