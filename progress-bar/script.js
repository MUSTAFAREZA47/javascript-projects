document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
  
    window.addEventListener('scroll', function() {
      const scrollPx = document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollPx / documentHeight) * 100;
  
      progressBar.style.width = `${scrollPercent}%`;
    });
  });
  