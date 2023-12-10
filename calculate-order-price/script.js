document.addEventListener('DOMContentLoaded', function() {
    const itemNameInput = document.getElementById('itemName');
    const itemPriceInput = document.getElementById('itemPrice');
    const itemQuantityInput = document.getElementById('itemQuantity');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalCost = document.getElementById('totalCost');
  
    const calculateTotalCost = () => {
      const itemName = itemNameInput.value.trim();
      const itemPrice = parseFloat(itemPriceInput.value);
      const itemQuantity = parseInt(itemQuantityInput.value);
  
      if (!itemName || isNaN(itemPrice) || isNaN(itemQuantity) || itemPrice <= 0 || itemQuantity <= 0) {
        totalCost.textContent = 'Please enter valid values for item name, price, and quantity';
        return;
      }
  
      const total = itemPrice * itemQuantity;
      totalCost.textContent = `Total cost for ${itemQuantity} ${itemName}(s) is Rs. ${total.toLocaleString()}/-`;
    };
  
    calculateBtn.addEventListener('click', calculateTotalCost);
  });
  