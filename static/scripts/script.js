// Get elements
const menu = document.querySelector(".menu");
const user = document.querySelector(".user-logo");
const closeLogin = document.querySelector(".close-login");
const login = document.querySelector(".login");
const signInBtn = document.querySelector(".signin-btn");
const cart = document.querySelector(".cart");
const closingBtn = document.querySelector(".closing-btn");
const cartMain = document.querySelector(".cart-main");
const wishlistBtn = document.querySelector(".wishlist-btn");
const showCartBtns = document.querySelectorAll(".showcartmain");
const emptyPara = document.querySelector(".empty-para");

// For showing cart section
const showCartMain = function () {
  cartMain.classList.add("wrapper");
};

showCartBtns.forEach(function (e) {
  e.addEventListener("click", function () {
    showCartMain();
  });
});

// For hiding the cart
const hideCartMain = function () {
  cartMain.classList.remove("wrapper");
};

closingBtn.addEventListener("click", hideCartMain);

// For the slide of navbar
menu.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("navshow");
});

function toggleLoginForm() {
  document.querySelector(".login").classList.toggle("wrapper");
}

// For the login form
user.addEventListener("click", () => {
  toggleLoginForm();
});

closeLogin.addEventListener("click", () => {
  toggleLoginForm();
});

signInBtn.addEventListener("click", () => {
  toggleLoginForm();
});

// Contact form
function sendMail() {
  console.log("asdfskdlafbnsdkl");
  var params = {
    fromName: document.getElementById("fullname").value,
    emailId: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  const value = document.getElementById("email_id").value;
  if (value.indexOf("@") === -1) {
    alert("please enter the email");
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

// For making add to cart functionality
$(document).ready(function () {
  $(".wishlist-btn").click(function () {
    var productName = $(this).siblings(".productname").text();
    var productPrice = $(this).siblings(".para").text();
    var productImg = $(this).siblings(".productimg").attr("src");

    console.log(
      "Product added to wishlist",
      productName,
      productPrice,
      productImg
    );

    // Add the product to the cart
    addToCart(productName, productPrice, productImg);
  });
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

  const existingCartItem = $(".cart-flex").filter(function () {
    return (
      $(this).find(".small-heading").text() === name &&
      $(this).find(".description_para").text() === price
    );
  });

  if (existingCartItem.length > 0) {
    const quantityInput = existingCartItem.find(".quantity-input");
    const currentQuantity = parseInt(quantityInput.val());
    const newQuantity = currentQuantity + 1;
    if (newQuantity > 10) {
      alert("quantity should not exceed 10");
      return;
    }
    quantityInput.val(newQuantity);
  } else {
    // Create a new cart item
    var cartItem = `
 <div class="cart-flex">
   <div>
     <img src="${imgSrc}" alt="${name}" />
   </div>
   <div class="cart-info">
     <h2 class="small-heading">${name}</h2>
     <p class="description_para">${price}</p>
     <input type="number" min="1" max="10" aria-label="Update quantity" title="Update quantity" class="quantity-input" value="1" />

     <i class="fa-solid fa-trash removebtn" aria-label="Removing-button" title="Remove item"></i>
   </div>
 </div>
`;

    // Append the cart item to the cart grid
    $(".cart-grid").append(cartItem);
  }

  // Update the total price
  updateTotalPrice();

  // Store cart into local storage
  saveCartToLocalStorage();
}

// Event listener for input change on quantity input fields
$(document).on("input", ".quantity-input", function () {
  updateTotalPrice();
  const inputValue = $(this).val();
  if (!inputValue || isNaN(inputValue) || inputValue <= 0) {
    $(this).val(1);
  }
  // Update the total price
  updateTotalPrice();

  if (inputValue > 10) {
    alert("Quantity should not exceed 10!");
    $(this).val(1);
    // You can replace the alert with your custom pop-up or other actions
    updateTotalPrice();
  }
  saveCartToLocalStorage();
});

// Update the total price
updateTotalPrice();

// Function to update the total price
function updateTotalPrice() {
  var total = 0;
  let totalQuantity = 0;

  // Iterate over each cart item
  $(".cart-flex").each(function () {
    var quantity = parseFloat($(this).find(".quantity-input").val());
    var price = parseFloat(
      $(this).find(".description_para").text().replace("£", "")
    );
    totalQuantity += quantity;
    total += quantity * price;
    $(".cart-btns span").text(totalQuantity);
  });

  $(".totalprice div:last-child").text(`£ ${total}`);

  if (total === 0) {
    $(".totalprice").addClass("hidden");
    $(".checkoutbtn").addClass("hidden");
    $(".emty-para").show();
    $(".cart-grid").addClass("hidden");
  } else {
    $(".totalprice").removeClass("hidden");
    $(".checkoutbtn").removeClass("hidden");
    $(".emty-para").hide();
    $(".cart-grid").removeClass("hidden");
  }
}

// Event listener for remove button click
$(document).on("click", ".removebtn", function () {
  const cartItem = $(this).closest(".cart-flex");
  const removedPrice = parseFloat(
    cartItem.find(".description_para").text().replace("£", "")
  );

  // Remove the cart item
  cartItem.remove();

  // Update the total price
  updateTotalPrice();

  saveCartToLocalStorage();
});

// Function to save cart items to local storage
function saveCartToLocalStorage() {
  const cartItems = [];

  $(".cart-flex").each(function () {
    const name = $(this).find(".small-heading").text();
    const price = $(this).find(".description_para").text();
    const imgSrc = $(this).find("img").attr("src");
    const quantity = $(this).find(".quantity-input").val();

    const cartItem = { name, price, imgSrc, quantity };
    cartItems.push(cartItem);
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Function to load cart items from local storage
function loadCartFromLocalStorage() {
  const storedCartItems = localStorage.getItem("cartItems");

  if (storedCartItems) {
    const cartItems = JSON.parse(storedCartItems);

    cartItems.forEach((item) => {
      addToCart(item.name, item.price, item.imgSrc);
      const quantityInput = $(".cart-flex").last().find(".quantity-input");
      quantityInput.val(item.quantity);
    });

    // Update total price after loading items
    updateTotalPrice();
  }
}

// Load cart items from local storage on page load
$(document).ready(function () {
  loadCartFromLocalStorage();
  updateTotalPrice();
});
