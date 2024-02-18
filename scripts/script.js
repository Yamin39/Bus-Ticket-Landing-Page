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

// seat btn functionalities
for (const button of buttons) {
  button.addEventListener("click", () => {
    if (btnArray.length < 4 && !btnArray.includes(button.innerText)) {
      button.classList.add("selected");
      appendTicket(button.innerText);
      btnArray.push(button.innerText);
      count++;
      calculate(count);
      seatLeft--;
      seatLeftDisplay.innerText = seatLeft;
      countDisplay.innerText = count;
    } else if (btnArray.length >= 4 && !btnArray.includes(button.innerText)) {
      alert("You cannot select more than 4 seats");
    }
  });
}
