document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const validationMessage = document.getElementById('validationMessage');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      const isValidEmail = email.includes('@');
      const isValidPassword = password.length >= 8;
  
      if (isValidEmail && isValidPassword) {
        validationMessage.textContent = 'Valid email and password!';
        validationMessage.classList.remove('text-red-500');
        validationMessage.classList.add('text-green-500');
      } else {
        validationMessage.textContent = 'Invalid email or password!';
        validationMessage.classList.remove('text-green-500');
        validationMessage.classList.add('text-red-500');
      }
    });
  });
  