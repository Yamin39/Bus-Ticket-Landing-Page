// tailwind custom color classes
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "primary-dark": "#030712",
        "secondary-dark": "#03071299",
        "primary-green": "#1DD100",
      },
    },
  },
};

// declaring variables
const seatLeftDisplay = document.getElementById("seats-left");
const countDisplay = document.getElementById("count");
const buttons = document.getElementsByClassName("btn-seat");
const btnArray = [];
let count = 0;
let seatLeft = 40;
let total = 0;

// seat btn functionalities
for (const button of buttons) {
  button.addEventListener("click", function () {
    if (btnArray.length < 4 && !btnArray.includes(button.innerText)) {
      button.classList.add("selected");
      appendTicket(button.innerText);
      btnArray.push(button.innerText);
      total += 550;
      displayTotal(total);
      count++;
      seatLeft--;
      seatLeftDisplay.innerText = seatLeft;
      countDisplay.innerText = count;
      displayTotal(total);

      // enable coupon code on selecting 4 seats
      if (btnArray.length === 4) {
        document.getElementById("applyBtn").removeAttribute("disabled");
      }
    } else if (btnArray.length >= 4 && !btnArray.includes(button.innerText)) {
      alert("You cannot select more than 4 seats");
    }
  });

  // enable next btn
  enableNextBtn(count);
}

// coupon discount
document.getElementById("applyBtn").addEventListener("click", function () {
  const couponContainer = document.getElementById("coupon-field-container");
  const couponField = document.getElementById("coupon-field");
  const discountContainer = document.getElementById("discountContainer");
  const discountPrice = document.getElementById("discount-price-display");

  if (couponField.value === "NEW15") {
    const discount = total * 0.15;
    couponContainer.style.display = "none";
    discountContainer.classList.remove("hidden");
    discountPrice.innerText = discount;
    displayTotal(total);
  } else if (couponField.value === "Couple 20") {
    const discount = total * 0.2;
    couponContainer.style.display = "none";
    discountContainer.classList.remove("hidden");
    discountPrice.innerText = discount;
    displayTotal(total);
  } else if (couponField.value !== "") {
    alert("You entered an invalid coupon code");
  }
});
