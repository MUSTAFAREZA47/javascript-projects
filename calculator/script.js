document.addEventListener('DOMContentLoaded', function() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operatorInput = document.getElementById('operator');
    const calculateBtn = document.getElementById('calculateBtn');
    const result = document.getElementById('result');
  
    function calculate() {
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      const operator = operatorInput.value;
  
      let calculationResult;
  
      switch (operator) {
        case '+':
          calculationResult = num1 + num2;
          break;
        case '-':
          calculationResult = num1 - num2;
          break;
        case '*':
          calculationResult = num1 * num2;
          break;
        case '/':
          calculationResult = num1 / num2;
          break;
        default:
          console.log('Invalid operator');
          result.textContent = 'Invalid operator';
          return;
      }
  
      result.textContent = `Result: ${calculationResult}`;
    }
  
    calculateBtn.addEventListener('click', calculate);
  });
  