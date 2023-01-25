function toggleMenu() {
  let menuAbrir = document.querySelector(".mobile_menu ");
  console.log(menuAbrir);

  if (menuAbrir.classList.contains("open")) {
    menuAbrir.classList.remove("open");
  } else {
    menuAbrir.classList.add("open");
  }
}
