document.addEventListener('DOMContentLoaded', function() {
    const cartInput = document.getElementById('cartInput');
    const removeDuplicatesBtn = document.getElementById('removeDuplicatesBtn');
    const uniqueItems = document.getElementById('uniqueItems');
  
    function removeDuplicates() {
      const cartItems = cartInput.value.split(',').map(item => item.trim());
      const uniqueCart = [...new Set(cartItems)]; // Using Set to remove duplicates
  
      uniqueItems.textContent = `Cart without duplicates: ${uniqueCart.join(', ')}`;
    }
  
    removeDuplicatesBtn.addEventListener('click', removeDuplicates);
  });
  