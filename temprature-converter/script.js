document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsiusInput');
    const convertBtn = document.getElementById('convertBtn');
    const result = document.getElementById('result');
  
    function convertCelsiusToFahrenheit(celsius) {
      const fahrenheit = (celsius * 9 / 5) + 32;
      return fahrenheit;
    }
  
    function handleConversion() {
      const celsius = parseFloat(celsiusInput.value);
  
      if (!isNaN(celsius)) {
        const fahrenheit = convertCelsiusToFahrenheit(celsius);
        result.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
      } else {
        result.textContent = 'Please enter a valid number for Celsius temperature';
      }
    }
  
    convertBtn.addEventListener('click', handleConversion);
  });
  