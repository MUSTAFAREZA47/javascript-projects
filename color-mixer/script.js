document.addEventListener('DOMContentLoaded', function() {
    const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const mixColorsBtn = document.getElementById('mixColorsBtn');
    const result = document.getElementById('result');
  
    function mixColors() {
      const color1 = color1Input.value.toLowerCase();
      const color2 = color2Input.value.toLowerCase();
  
      let mixedColor;
  
      switch (true) {
        case (color1 === 'red' && color2 === 'blue') || (color1 === 'blue' && color2 === 'red'):
          mixedColor = 'purple';
          break;
        case (color1 === 'red' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'red'):
          mixedColor = 'orange';
          break;
        case (color1 === 'blue' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'blue'):
          mixedColor = 'green';
          break;
        default:
          mixedColor = 'Invalid color combination';
          break;
      }
  
      result.textContent = `Result: ${mixedColor}`;
    }
  
    mixColorsBtn.addEventListener('click', mixColors);
  });
  