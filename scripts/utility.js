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

// enable next btn
function enableNextBtn(isSeatSelected, isNumberEntered) {
  if (isSeatSelected && isNumberEntered) {
    document.getElementById("next-btn").removeAttribute("disabled");
  }
}

// disable next btn
function disableNextBtn(isNumberEntered) {
  if (!isNumberEntered) {
    document.getElementById("next-btn").setAttribute("disabled", false);
  }
}
