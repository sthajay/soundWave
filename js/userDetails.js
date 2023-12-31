$(document).ready(function () {
  $("#userRegistrationForm").validate({
    rules: {
      firstname: {
        required: true,
      },
      lastname: {
        required: true,
      },
      contact: {
        required: true,
      },
    },

    messages: {
      firstname: {
        required: "Please enter your firstname",
      },
      lastname: {
        required: "Please enter your last name",
      },
      contact: {
        required: "Please enter your contact",
      },
    },
  });

  // first hide the container and show loader
  $(".form-container").hide();
  $(".loader").fadeOut();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  // wait for the loader to fade out and display the container with animation
  const timeout = setTimeout(() => {
    $(".div-height").hide();
    $(".form-container").show();
    $(".form-container").animate({
      left: "2px",
      opacity: "1",
      height: "100%",
      width: "100%",
    });
  }, 500);

  // display user details on first reload
  $("#firstname").val(user.first_name);
  $("#lastname").val(user.last_name);
  $("#address").val(user.address);
  $("#email").val(user.email);
  $("#datepicker").val(user.dob);
  $("#contact").val(user.contact);
  $("#gender").val(user.gender);
  $("#country_selector").val(user.country);

  // Waitme plugin
  let current_effect = "bounce";
  $("#loader-waitme").click(function () {
    run_waitMe(current_effect);
  });

  function run_waitMe(effect) {
    $("#loader-waitme").waitMe({
      effect: "bounce",
      text: "",
      bg: "rgba(255,255,255,0.7)",
      color: "#000",
      waitTime: 500,
    });
  }

  document.querySelector(".nav-menu-btn").addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("show");
  });

  // Clear the cart when user clicks on Clear Cart button
  document.querySelector(".clear-cart-btn").addEventListener("click", () => {
    localStorage.removeItem("cart");
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();
  });
});
