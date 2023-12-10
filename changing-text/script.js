document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('heading');
    const toggleBtn = document.getElementById('toggleBtn');
    let isToggled = false;
  
    toggleBtn.addEventListener('click', function() {
      if (isToggled) {
        heading.textContent = 'The most affordable learning platform';
      } else {
        heading.textContent = 'PW Skills';
      }
      isToggled = !isToggled;
    });
  });
  