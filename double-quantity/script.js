document.addEventListener('DOMContentLoaded', function() {
    const cartInput = document.getElementById('cartInput');
    const doubleQuantityBtn = document.getElementById('doubleQuantityBtn');
    const correctedCart = document.getElementById('correctedCart');
  
    function doubleQuantity() {
      const quantities = cartInput.value.split(',').map(quantity => parseInt(quantity.trim(), 10));
      
      const correctedQuantities = quantities.map(quantity => quantity * 2);
  
      correctedCart.textContent = `Corrected quantities: ${correctedQuantities.join(', ')}`;
    }
  
    doubleQuantityBtn.addEventListener('click', doubleQuantity);
  });
  