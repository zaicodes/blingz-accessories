const menu = document.querySelector(".menu");
const user = document.querySelector(".user-logo");
const closelogin = document.querySelector(".close-login");
const login = document.querySelector(".login");
const signinbtn = document.querySelector(".signin-btn");
const cart = document.querySelector(".cart");
const closingbtn = document.querySelector(".closing-btn");
const cartmain = document.querySelector(".cart-main");
const wishlistbtn = document.querySelector(".wishlist-btn");
const showcartbtns = document.querySelectorAll(".showcartmain");
const emptypara = document.querySelector(".emty-para");

// for showing cart section
const showcartmain = function () {
  cartmain.classList.add("wrapper");
};
showcartbtns.forEach(function (e) {
  e.addEventListener("click", function () {
    showcartmain();

    // if (!cartmain) {
    //   emptypara.classList.add("hidden");
    // }
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

// for making add to cart functionality
$(document).ready(function () {
  $(".wishlist-btn").click(function () {
    var productname = $(this).siblings(".productname").text();
    var productprice = $(this).siblings(".para").text();
    var productimg = $(this).siblings(".productimg").attr("src");

    console.log(
      "Product added to wishlist",
      productname,
      productprice,
      productimg
    );

    // Add the product to the cart
    addToCart(productname, productprice, productimg);
  });

  // Function to add a product to the cart
  function addToCart(name, price, imgSrc) {
    // Check if the cart is currently empty
    if ($(".emty-para").is(":visible")) {
      $(".emty-para").hide(); // Hide the empty cart message
      $(".cart-grid").removeClass("hidden"); // Show the cart grid
      $(".totalprice").removeClass("hidden");
      $(".checkoutbtn").removeClass("hidden"); // Show the checkout button
    }

    // Create a new cart item
    var cartItem = `
  <div class="cart-flex">
    <div>
      <img src="${imgSrc}" alt="${name}" />
    </div>
    <div class="cart-info">
      <h2 class="small-heading">${name}</h2>
      <p class="description_para">${price}</p>
      <i class="fa-solid fa-trash removebtn" aria-label="Removing-button" title="Remove item"></i>
    </div>
    <input type="number" aria-label="Update quantity" title="Update quantity" id="" />
  </div>
`;

    // Append the cart item to the cart grid
    $(".cart-grid").append(cartItem);

    // Update the total price (you might need to adjust this logic based on your actual implementation)
    var totalPrice =
      parseFloat($(".totalprice div:last-child").text().replace("£", "")) +
      parseFloat(price.replace("£", ""));
    $(".totalprice div:last-child").text(`£ ${totalPrice}`);
  }
});
document.addEventListener("click", function (event) {
  const targetElement = event.target;

  // Check if the clicked element has the class "removebtn"
  if (targetElement.classList.contains("removebtn")) {
    // Get the parent element of the remove button, which is the cart item
    const cartItem = targetElement.closest(".cart-flex");

    // Check if the cart item exists before attempting to remove it
    if (cartItem) {
      // Get the price of the item being removed
      const removedPrice = parseFloat(
        cartItem.querySelector(".description_para").textContent.replace("£", "")
      );

      // Remove the cart item
      cartItem.remove();

      // Check if there are any remaining cart items
      if ($(".cart-flex").length === 0) {
        // If the cart is empty, hide the total and checkout button
        $(".totalprice").addClass("hidden");
        $(".checkoutbtn").addClass("hidden");
        // Show the empty cart message
        $(".emty-para").show();
        $(".totalprice div:last-child").text(`£ 0`);

        // Hide the cart grid
        $(".cart-grid").addClass("hidden");
      } else {
        // Update the total price by subtracting the removed item's price
        var totalPrice =
          parseFloat($(".totalprice div:last-child").text().replace("£", "")) -
          removedPrice;
        $(".totalprice div:last-child").text(`£ ${totalPrice}`);
        console.log(totalPrice);
      }
    }
  }
});
