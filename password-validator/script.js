document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const validateBtn = document.getElementById('validateBtn');
    const validationMessage = document.getElementById('validationMessage');
  
    function validatePassword() {
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
  
      if (password === confirmPassword && password !== '') {
        console.log('Password Matched. Password validation Successful.');
        validationMessage.textContent = 'Password Matched. Password validation Successful.';
        validationMessage.classList.remove('text-red-500');
        validationMessage.classList.add('text-green-500');
      } else {
        console.log('Password didn\'t match. Password validation unsuccessful.');
        validationMessage.textContent = 'Password didn\'t match. Password validation unsuccessful.';
        validationMessage.classList.remove('text-green-500');
        validationMessage.classList.add('text-red-500');
      }
    }
  
    validateBtn.addEventListener('click', validatePassword);
  });
  