const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const currencySelect = document.getElementById("currency"); // Selector de moneda
const totalInCurrency = document.getElementById("totalInCurrency"); // Total en la moneda seleccionada

populateUI();

let ticketPrice = +movieSelect.value;

// Obtener la tasa de cambio y actualizar el total en la moneda seleccionada
function updateCurrency(totalValue) {
  const currency = currencySelect.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency];

      // Actualizar el total en la moneda seleccionada
      totalInCurrency.innerText =
        (totalValue * rate).toFixed(2) + " " + currency;

      // Actualizar los precios de las películas en la moneda seleccionada
      const movieOptions = document.querySelectorAll("#movie option");
      movieOptions.forEach((option) => {
        const basePrice = option.getAttribute("data-base-price");
        const priceInCurrency = (basePrice * rate).toFixed(2);
        option.innerText = `${
          option.innerText.split(" ")[0]
        } (${priceInCurrency} ${currency})`;
        option.value = priceInCurrency;
      });

      // Actualizar el precio del billete
      ticketPrice = +movieSelect.value;
    })
    .catch((error) => {
      alert("Ha ocurrido un error: " + error.message);
    });
}

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  const totalValue = selectedSeatsCount * ticketPrice;

  count.innerText = selectedSeatsCount;
  updateCurrency(totalValue); // Pasar totalValue a updateCurrency
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Evento de cambio de moneda
currencySelect.addEventListener("change", updateCurrency);

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();
