const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");
const loadingEl = document.getElementById("loading");

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  // Mostrar el elemento de carga
  loadingEl.style.display = "block";

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      // Ocultar el elemento de carga
      loadingEl.style.display = "none";
      // console.log(data);
      const rate = data.rates[currency_two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    })
    .catch((error) => {
      // Ocultar el elemento de carga
      loadingEl.style.display = "none";

      // Mostrar el mensaje de error
      alert("ERROR MESSAGE: " + error.message);
    });
}

// Event listeners
currencyEl_one.addEventListener("change", calculate);
//o No permitir números negativos.
amountEl_one.addEventListener("input", function () {
  if (this.value < 0) this.value = Math.abs(this.value);
  calculate();
});
currencyEl_two.addEventListener("change", calculate);
//o No permitir números negativos.
amountEl_two.addEventListener("input", function () {
  if (this.value < 0) this.value = Math.abs(this.value);
  calculate();
});

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
