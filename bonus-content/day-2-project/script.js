// 1. create eventlisten on start countdown btn.
const startButton = document.getElementById('startButton')
// 2. get value from input.
const timerInput = document.getElementById('timerInput')
const countDownDisplay = document.getElementById('countDownDisplay')

// hide the resume and pause button intially
const resumeButton = document.getElementById('resumeButton')
const pauseButton = document.getElementById('pauseButton')

resumeButton.style.display = 'none'
pauseButton.style.display = 'none'

let isTimerPaused = false


function startTimer() {
  let valueInSeconds = Number(timerInput.value);
  if (isNaN(valueInSeconds)) {
    countDownDisplay.textContent = 'Please enter a valid number'
    return;
  }

  if (valueInSeconds < 0) {
    countDownDisplay.textContent = 'Please enter seconds > 0'
    return;
  }

  resumeButton.style.display = 'inline'
  pauseButton.style.display = 'inline'

  const timerId = setInterval(() => {
    if (!isTimerPaused) {
      valueInSeconds -= 1;
      countDownDisplay.textContent = `Time left: ${valueInSeconds} seconds`
      if (valueInSeconds <= 0) {
        clearInterval(timerId)
        countDownDisplay.textContent = 'Time is up'
      }
    }
  }, 1000)
}

resumeButton.addEventListener('click', () => {
  isTimerPaused = false;
})

pauseButton.addEventListener('click', () => {
  isTimerPaused = true;
})

startButton.addEventListener('click', startTimer)