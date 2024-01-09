const menu = document.querySelector(".menu");
const user = document.querySelector(".user-logo");
const closelogin = document.querySelector(".close-login");
const login = document.querySelector(".login");
const signinbtn = document.querySelector(".signin-btn");
const cart = document.querySelector(".cart");
const closingbtn = document.querySelector(".closing-btn");
const cartmain = document.querySelector(".cart-main");
const wishlistbtn = document.querySelector(".wishlistbtn");
const showcartbtns = document.querySelectorAll(".showcartmain");

// for showing cart section
const showcartmain = function () {
  cartmain.classList.add("wrapper");
};
showcartbtns.forEach(function (e) {
  e.addEventListener("click", function () {
    showcartmain();
  });
});

// for hiding the the cart
const hidecartmain = function () {
  cartmain.classList.remove("wrapper");
};

closingbtn.addEventListener("click", hidecartmain);

// for the slide of navbar
menu.addEventListener("click", () => {
  console.log("clciked");
  document.querySelector(".nav-links").classList.toggle("navshow");
});

function toggleloginform() {
  document.querySelector(".login").classList.toggle("wrapper");
}

// for the login form
user.addEventListener("click", () => {
  toggleloginform();
});
closelogin.addEventListener("click", () => {
  toggleloginform();
});
signinbtn.addEventListener("click", () => {
  toggleloginform();
});

// contact form
function Sendmail() {
  console.log("asdfskdlafbnsdkl");
  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  const value = document.getElementById("email_id").value;
  if (value.indexOf("@") === -1) {
    alert("plesae enter the email");
    return;
  } else {
    emailjs
      .send("service_vtkbahe", "template_47nej3m", params)
      .then(function (res) {
        alert("Success ! " + res.status);
      });
    document.getElementById("fullname").value = "";
    document.getElementById("email_id").value = "";
    document.getElementById("message").value = "";
  }
}
