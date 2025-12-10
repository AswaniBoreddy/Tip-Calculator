let selectedTip = 0;

function setTip(percent) {
  selectedTip = percent;
  document.getElementById("custom-tip").value = "";
}

function calculateTip() {
  let bill = parseFloat(document.getElementById("bill").value);
  let customTip = parseFloat(document.getElementById("custom-tip").value);
  let people = parseInt(document.getElementById("people").value) || 1;
  let currency = document.getElementById("currency").value;

  // If custom tip entered, use it
  let tipPercent = customTip > 0 ? customTip : selectedTip;

  if (bill <= 0 || tipPercent < 0) {
    alert("Please enter valid values!");
    return;
  }

  let tipAmount = (bill * tipPercent) / 100;
  let totalAmount = bill + tipAmount;
  let perPerson = totalAmount / people;

  document.getElementById("tip-amount").textContent =
    "Tip Amount: " + currency + tipAmount.toFixed(2);

  document.getElementById("total-amount").textContent =
    "Total Amount: " + currency + totalAmount.toFixed(2);

  document.getElementById("per-person").textContent =
    "Amount Per Person: " + currency + perPerson.toFixed(2);

  document.querySelector(".result").style.display = "block";
}

function resetAll() {
  document.getElementById("bill").value = "";
  document.getElementById("custom-tip").value = "";
  document.getElementById("people").value = 1;
  selectedTip = 0;

  document.querySelector(".result").style.display = "none";
}
