//PSEUDO CODING//

//Step one: timer//
// ****NEEDS FURTHER DEV**** //
// timer is working but it needs to stop once the quiz is finished
// time still needs to go down by 10 seconds once the wrong answer is clicked
var timeEl = document.querySelector("#time");
var secondsLeft = 76; //so that it starts counting down from 75 seconds

var startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", setTime); //adds event listener to start button to start the timer

function setTime(event) {
    event.preventDefault();//prevents timer from starting automatically
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
    
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        alert('sorry, out of time');
      }

  
    }, 1000);
}
//---- Try Again Later
//var wrongTime = document.querySelector("#wrong-opt");

//wrongTime.addEventListener("click", subTime);
//function setTime(event) {
//    event.preventDefault();
//}
//------

//timer section ends here



//2. The quiz options



