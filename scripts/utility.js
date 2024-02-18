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
function calculate(count) {
  const totalPriceDisplay = document.getElementById("total-price-display");
  const grandTotalDisplay = document.getElementById("grand-total-display");
  const totalPrice = count * 550;
  totalPriceDisplay.innerText = totalPrice;
  grandTotalDisplay.innerText = totalPrice;
}
