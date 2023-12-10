document.addEventListener('DOMContentLoaded', function() {
    const costInput = document.getElementById('costInput');
    const peopleInput = document.getElementById('peopleInput');
    const calculateBtn = document.getElementById('calculateBtn');
    const billResult = document.getElementById('billResult');
  
    function calculateBill() {
      const costOfDish = parseFloat(costInput.value);
      const numberOfPeople = parseInt(peopleInput.value);
  
      if (!isNaN(costOfDish) && !isNaN(numberOfPeople) && costOfDish > 0 && numberOfPeople > 0) {
        const totalBill = costOfDish * numberOfPeople;
        const amountPerPerson = totalBill / numberOfPeople;
  
        billResult.innerHTML = `
          <p>Total bill: Rs. ${totalBill.toLocaleString()}/-</p>
          <p>Each person should pay: Rs. ${amountPerPerson.toLocaleString()}/-</p>
        `;
      } else {
        billResult.textContent = 'Please enter valid values for cost and number of people';
      }
    }
  
    calculateBtn.addEventListener('click', calculateBill);
  });
  