const menu = document.querySelector(".menu");
const user = document.querySelector(".user-logo");
const closelogin = document.querySelector(".close-login");
const login = document.querySelector(".login");
const signinbtn = document.querySelector(".signin-btn");
menu.addEventListener("click", () => {
  console.log("clciked");
  document.querySelector(".nav-links").classList.toggle("navshow");
});

function toggleloginform() {
  document.querySelector(".login").classList.toggle("wrapper");
}

user.addEventListener("click", () => {
  toggleloginform();
});
closelogin.addEventListener("click", () => {
  toggleloginform();
});
signinbtn.addEventListener("click", () => {
  toggleloginform();
});
