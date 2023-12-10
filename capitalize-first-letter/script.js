document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    const capitalizeBtn = document.getElementById('capitalizeBtn');
    const capitalizedName = document.getElementById('capitalizedName');
  
    function capitalizeFirstLetter() {
      const name = nameInput.value.trim();
  
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  
      capitalizedName.textContent = `Capitalized name: ${capitalized}`;
    }
  
    capitalizeBtn.addEventListener('click', capitalizeFirstLetter);
  });
  