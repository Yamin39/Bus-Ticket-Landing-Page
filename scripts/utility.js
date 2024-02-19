// append selected ticket info
function appendTicket(ticketName) {
  const ulContainer = document.getElementById("table-container");
  const newLi = document.createElement("li");
  newLi.innerHTML = `
  <p>${ticketName}</p>
  <p>Economy</p>
  <p>550</p>
  `;
  ulContainer.appendChild(newLi);
}

// calculate price
function displayTotal(total) {
  const totalPriceDisplay = document.getElementById("total-price-display");
  const grandTotalDisplay = document.getElementById("grand-total-display");
  const discount = document.getElementById("discount-price-display").innerText;
  totalPriceDisplay.innerText = total;
  grandTotalDisplay.innerText = total - discount;
}

// next btn functionalities
function enableNextBtn(btnArrayLength) {
  const phoneNumber = document.getElementById("phone-number");
  if (phoneNumber.value.length > 0 && btnArrayLength > 0) {
    document.getElementById("next-btn").removeAttribute("disabled");
  }
}
