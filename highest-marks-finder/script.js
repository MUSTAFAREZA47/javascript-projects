document.addEventListener('DOMContentLoaded', function() {
    const marksInput = document.getElementById('marksInput');
    const findHighestBtn = document.getElementById('findHighestBtn');
    const highestMarks = document.getElementById('highestMarks');
  
    function findHighestMarks() {
      const marksString = marksInput.value;
      console.log(marksString)
      const marksArray = marksString.split(',').map(mark => parseInt(mark.trim(), 10));
      console.log(marksArray)
  
      const highest = marksArray.reduce((max, current) => current > max ? current : max, -Infinity);
  
      highestMarks.textContent = `Highest marks: ${highest}`;
    }
  
    findHighestBtn.addEventListener('click', findHighestMarks);
  });
  