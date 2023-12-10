document.addEventListener('DOMContentLoaded', function() {
    const originalPriceInput = document.getElementById('originalPrice');
    const discountedPriceInput = document.getElementById('discountedPrice');
    const calculateBtn = document.getElementById('calculateBtn');
    const discountPercentage = document.getElementById('discountPercentage');
  
    const calculateDiscountPercent = () => {
      const originalPrice = parseFloat(originalPriceInput.value);
      const discountedPrice = parseFloat(discountedPriceInput.value);
  
      if (isNaN(originalPrice) || isNaN(discountedPrice) || originalPrice <= 0 || discountedPrice <= 0) {
        discountPercentage.textContent = 'Please enter valid values for original price and discounted price';
        return;
      }
  
      const discount = originalPrice - discountedPrice;
      const discountPercent = 100 - ((discount / originalPrice) * 100);
      const roundedDiscountPercent = discountPercent.toFixed(2);
  
      discountPercentage.textContent = `Discount percentage: ${roundedDiscountPercent}%`;
    };
  
    calculateBtn.addEventListener('click', calculateDiscountPercent);
  });
  