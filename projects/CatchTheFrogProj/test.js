
let time = 5

const timerDisplay = document.getElementById('timer');
  
    // Start the 5-second timer
    
  
    function startTimer(seconds) {
      updateTimerDisplay(seconds);
  
      // Set a timeout to execute after 1 second
      const countdown = setInterval(() => {
        seconds--;
  
        // Update the timer display
        updateTimerDisplay(seconds);
  
        // Check if the timer reached 0
        if (seconds <= 0) {
          clearInterval(countdown);
          timerDisplay.innerText = "Time's up!";
          alert("Ohh,You Lose!!")
        }
      }, 1000);
    }
  
    function updateTimerDisplay(seconds) {
      timerDisplay.innerText = "Time Lift: "+ seconds;
    }
    const setTime = function(t){
      time=t
  }

  