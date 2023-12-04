document.addEventListener('DOMContentLoaded', () => {
    const frogContainer = document.getElementById('frogContainer');
    const levelDisplay = document.getElementById('levelDisplay');
    const timerDisplay = document.getElementById('timer');
    const scoreDisplay = document.getElementById('score');
  
    let level = 1;
    let score = 0;
    let timerSeconds = 5;
    let timerInterval;
    let frogsToClick = 1; // Initial frogs to click
  
    // Initialize the game
    startLevel();
  
    function startLevel() {
      // Update level information
      levelDisplay.innerText = `Level: ${level}`;
      scoreDisplay.innerText = `Score: ${score}`;
      timerDisplay.innerText = `Time: ${timerSeconds}s`;
  
      // Clear the frog container
      frogContainer.innerHTML = '';
  
      // Add frogs to the container
      for (let i = 0; i < level ; i++) {
        const frog = document.createElement('div');
        frog.classList.add('frog');
        frog.addEventListener('click', () => clickFrog(frog));
        frogContainer.appendChild(frog);
      }
  
      // Update frogs to click for the current level
      if (level < 5) {
        frogsToClick = level; // Show two frogs to click for levels 1 to 4
      } else {
        frogsToClick = level; // Show one frog to click for level 5 (Winning level)
      }
  
      // Start the level timer
      startTimer();
    }
  
    function clickFrog(clickedFrog) {
      score++;
      scoreDisplay.innerText = `Score: ${score}`;
  
      // Remove the clicked frog from the DOM
      clickedFrog.style.display = 'none';
  
      // Check if the player has clicked enough frogs
      if (score >= level) {
        // Check if the player has won the game
        if (level >= 5) {
          stopTimer();
          gameWin();
        } else {
          // Move to the next level
          level++;
          score = level; // Reset score for the new level
          stopTimer();
          setTimeout(() => startLevel(), 1000); // Wait for 1 second before starting the next level
        }
      } else {
        // Reset the timer for each click
        resetTimer();
      }
    }
  
    function startTimer() {
      timerInterval = setInterval(() => {
        timerSeconds--;
  
        // Update timer display
        timerDisplay.innerText = `Time: ${timerSeconds}s`;
  
        // Check if time is up
        if (timerSeconds <= 0) {
          stopTimer();
          gameOver();
        }
      }, 1000);
    }
  
    function stopTimer() {
      clearInterval(timerInterval);
    }
  
    function resetTimer() {
      // Reset timer seconds and restart the timer
      timerSeconds = 5;
    }
  
    function gameOver() {
      alert(`Game Over! Your final score is ${score}.`);
      // Optionally, you can implement logic to restart the game or perform other actions.
    }
  
    function gameWin() {
      alert(`Congratulations! You've won the game with a score of ${score}.`);
      // Optionally, you can implement logic to restart the game or perform other actions.
    }
  });
  