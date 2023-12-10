document.addEventListener('DOMContentLoaded', function() {
    const countDisplay = document.getElementById('countDisplay');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');
  
    let count = 0;
  
    function updateDisplay() {
      countDisplay.textContent = count;
    }
  
    function incrementCount() {
      count++;
      updateDisplay();
    }
  
    function decrementCount() {
      count--;
      updateDisplay();
    }
  
    function resetCount() {
      count = 0;
      updateDisplay();
    }
  
    incrementBtn.addEventListener('click', incrementCount);
    decrementBtn.addEventListener('click', decrementCount);
    resetBtn.addEventListener('click', resetCount);
  
    updateDisplay();
  });
  