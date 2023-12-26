const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  console.log("clciked");
  document.querySelector(".nav-links").classList.toggle("navshow");
});
