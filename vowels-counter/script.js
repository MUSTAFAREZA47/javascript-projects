document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const countVowelsBtn = document.getElementById('countVowelsBtn');
    const vowelCount = document.getElementById('vowelCount');
  
    function countVowels() {
      const text = textInput.value.toLowerCase();
      const vowels = 'aeiou';
      let count = 0;
  
      for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
          count++;
        }
      }
  
      vowelCount.textContent = `Number of vowels: ${count}`;
    }
  
    countVowelsBtn.addEventListener('click', countVowels);
  });
  