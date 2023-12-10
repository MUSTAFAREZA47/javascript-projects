document.addEventListener('DOMContentLoaded', function() {
    const movingImage = document.getElementById('moving-image');
    let positionX = 0;
    let positionY = 0;
  
    const moveImage = (directionX, directionY) => {
      positionX += directionX;
      positionY += directionY;
      movingImage.style.transform = `translate(${positionX}px, ${positionY}px)`;
    };
  
    document.addEventListener('keydown', function(event) {
      const speed = 10;
      switch (event.key) {
        case 'ArrowUp':
          moveImage(0, -speed);
          break;
        case 'ArrowDown':
          moveImage(0, speed);
          break;
        case 'ArrowLeft':
          moveImage(-speed, 0);
          break;
        case 'ArrowRight':
          moveImage(speed, 0);
          break;
      }
    });
  });
  