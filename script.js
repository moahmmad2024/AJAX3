$(document).ready(function () {
  let timerInterval;
  let minutes = 25;
  let seconds = 0;

  function updateTimerDisplay() {
    $(".minutes").text(minutes < 10 ? "0" + minutes : minutes);
    $(".seconds").text(seconds < 10 ? "0" + seconds : seconds);
  }

  function startTimer() {
    timerInterval = setInterval(function () {
      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        clearInterval(timerInterval);
        playNotificationSound();
      }
      updateTimerDisplay();
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
  }

  function setTime() {
    const customMinutes = parseInt($("#custom-time").val());
    if (!isNaN(customMinutes) && customMinutes >= 0) {
      clearInterval(timerInterval);
      minutes = customMinutes;
      seconds = 0;
      updateTimerDisplay();
    } else {
      alert("Invalid input. Please enter a positive number.");
    }
  }

  function playNotificationSound() {
    const audio = $("#notification")[0];
    audio.play();
  }

  $(".set-time").click(function () {
    setTime();
  });

  $(".start-button").click(function () {
    startTimer();
  });

  $(".reset-button").click(function () {
    resetTimer();
  });
});
