// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const totalPriceElement = document.getElementById('total-price');
  let selectedCount = 0;

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        if (selectedCount >= 8) {
          this.checked = false;
          return;
        }
        selectedCount++;
      } else {
        selectedCount--;
      }

      calculateTotal();
    });
  });

  function calculateTotal() {
    let totalPrice = 0;

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        totalPrice += parseFloat(checkbox.value);
      }
    });

    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  }
});
