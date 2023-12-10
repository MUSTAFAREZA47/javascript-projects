document.addEventListener('DOMContentLoaded', function() {
    const daysInput = document.getElementById('daysInput');
    const carType = document.getElementById('carType');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalCost = document.getElementById('totalCost');
  
    function calculateRentalCost() {
      const days = parseInt(daysInput.value);
      const selectedCarType = carType.value;
  
      let rentalCostPerDay = 0;
  
      switch (selectedCarType) {
        case 'economy':
          rentalCostPerDay = 4000;
          break;
        case 'midsize':
          rentalCostPerDay = 10000;
          break;
        case 'luxury':
          rentalCostPerDay = 20000;
          break;
        default:
          rentalCostPerDay = 0;
          break;
      }
  
      const total = days * rentalCostPerDay;
      totalCost.textContent = `Total rental cost: Rs. ${total.toLocaleString()}/-`;
    }
  
    calculateBtn.addEventListener('click', calculateRentalCost);
  });
  