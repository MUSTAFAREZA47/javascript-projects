document.addEventListener('DOMContentLoaded', function() {
    const clickBtn = document.getElementById('clickBtn');
    const dblClickPara = document.getElementById('dblClickPara');
    const mouseOverOutDiv = document.getElementById('mouseOverOutDiv');
    const keyEventsInput = document.getElementById('keyEventsInput');
    const keyPressPara = document.getElementById('keyPressPara');
    const keyDownPara = document.getElementById('keyDownPara');
    const keyUpPara = document.getElementById('keyUpPara');
  
    // Onclick event listener
    clickBtn.addEventListener('click', function() {
      alert('Button clicked!');
    });
  
    // Doubleclick event listener
    dblClickPara.addEventListener('dblclick', function() {
      alert('Double clicked!');
    });
  
    // Mouseover event listener
    mouseOverOutDiv.addEventListener('mouseover', function() {
      mouseOverOutDiv.style.backgroundColor = 'red';
    });
  
    // Mouseout event listener
    mouseOverOutDiv.addEventListener('mouseout', function() {
      mouseOverOutDiv.style.backgroundColor = 'yellow';
    });
  
    // Keypress event listener
    keyEventsInput.addEventListener('keypress', function(event) {
      keyPressPara.textContent = `Keypress event: ${event.key}`;
    });
  
    // Keydown event listener
    keyEventsInput.addEventListener('keydown', function(event) {
      keyDownPara.textContent = `Keydown event: ${event.key}`;
    });
  
    // Keyup event listener
    keyEventsInput.addEventListener('keyup', function(event) {
      keyUpPara.textContent = `Keyup event: ${event.key}`;
    });
  });
  