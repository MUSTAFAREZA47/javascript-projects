document.addEventListener('DOMContentLoaded', function() {
    const numbersInput = document.getElementById('numbersInput');
    const checkDivisibilityBtn = document.getElementById('checkDivisibilityBtn');
    const result = document.getElementById('result');
  
    function checkDivisibility() {
      const numbers = numbersInput.value.split(',').map(num => parseInt(num.trim()));
  
      let divisibleBy3NotBy2 = '';
  
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0 && numbers[i] % 2 !== 0) {
          divisibleBy3NotBy2 += numbers[i] + ', ';
        }
      }
  
      if (divisibleBy3NotBy2) {
        divisibleBy3NotBy2 = divisibleBy3NotBy2.slice(0, -2); // Remove extra comma and space at the end
        result.textContent = `Numbers divisible by 3 but not by 2: ${divisibleBy3NotBy2}`;
      } else {
        result.textContent = 'No numbers found that are divisible by 3 but not by 2';
      }
    }
  
    checkDivisibilityBtn.addEventListener('click', checkDivisibility);
  });
  