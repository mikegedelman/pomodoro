Notification.requestPermission();

let interval, timeout, secondsleft;

function startTimer() {
	const mins = parseInt($('#inputMins').val());
  console.log(mins)

  secondsLeft = 60 * mins;
  updateTime(secondsLeft);
 
	interval = setInterval(function() {
		updateTime(secondsLeft);
    
    secondsLeft--;
  }, 1000);
  
  timeout = setTimeout(function() {
  	new Notification('Pomodoro cycle finished');
  	clearInterval(interval);
    
    
    $('#timeLeft').text(`Done!`);
  }, 1000 * secondsLeft);
  secondsLeft--;
}

function updateTime() {
		if (!secondsLeft || secondsLeft == 0) {
    	$('#timeLeft').text('');
      return;
    }

  	const minutesLeft = Math.floor(secondsLeft / 60);
    const secondsRemainder = secondsLeft % 60;
    $('#timeLeft').text(`${minutesLeft}m ${secondsRemainder}s`);
}

function reset() {
	clearInterval(interval);
  clearTimeout(timeout);
  secondsLeft = 0;
  updateTime();
}
