//PSEUDO CODING//

//Step one: timer//
// ****NEEDS FURTHER DEV**** //
// timer is working but it needs to stop once the quiz is finished
// time still needs to go down by 10 seconds once the wrong answer is clicked
var timeEl = document.querySelector("#time");
var secondsLeft = 76; //so that it starts counting down from 75 seconds

var startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", startTimer); //adds event listener to start button to start the timer
//startBtn.addEventListener("click", startGame); //adds event listener to start button to start the game

function startTimer(event) {
    event.preventDefault();//prevents timer from starting automatically
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
        // Stops execution of action at set interval
        timeEl.textContent = '';
        clearInterval(timerInterval);
        // Use `clearInterval()` to stop the timer
        endGame()
        // Call the `displayMessage()` function
        // displayMessage();
        
        }
    } ,1000);
    startGame();

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
var quizArea = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
var questionContent = document.getElementById("questionContainer");
var questionText = document.getElementById("question");
var questionsBtn = document.getElementById("answer-next-buttons");
var quizTitlePage = document.getElementById("startPage");

//var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-next-buttons");
var score; //this will be the seconds left

var shuffledQuestions, currentQuestionIndex;

var questionsBtn = [
  { // [0]
    question: "Commonly used data types do NOT include: ",
    answerChoices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "3. alerts"
    },
  { // [1]
    question: "The condition in an if/else statement is enclosed with____.",
    answerChoices: [ "1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    correctAnswer: "2. curly brackets"
    },
  { // [2]
    question: "Arrays in JavaScript can be used to store____.",
    answerChoices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: "4. all of the above"
    },
  { // [3]
    question: "String values must be enclosed within ____ when being assigned to variables",
    answerChoices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctAnswer: "3. quotes"
    },
  { // [4]
    question: "A very useful tool used during developement and debugging for printing content to the debuuger is:",
    answerChoices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    correctAnswer: "4. console.log"
    }
]


function startGame() {
    console.log("started");

    startBtn.classList.add("hide");
    quizTitlePage.classList.add("hide");
    questionContent.classList.remove("hide");
    questionText.classList.remove("hide");
    shuffledQuestions = questionsBtn.sort(() => Math.random() -.5);
    currentQuestionIndex = 0;
    
    showQuestion();

    //for (var i=0; i<4; i++){
    //document.createElement("button").textContent = questionsBtn[currentQuestion].answerChoices[i]
    //}
  // start the quiz!
  // 1. Start timer *done
  // 2. create a question *done
  // 3. create answer choices *done
  // 4. add event listeners to my answer choice buttons and that will validate whether they chose the right answer or not
  // 5. move on to next question

  // this function will start your timer
    //startTimer();
  // this function will kick off rendering the question and answers to the page
    //generateQuestion();
}

function generateNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
    //question = questions[currentQuestion];
  // create an element (p, div)
    //var questionEl = document.createElement("p");
  // write into that element using our question variable (textContent)
    //questionEl.textContent(question);
  // append that question element into our quiz area (appendChild)
   // questionEl.appendChild(quizArea);
  // generateAnswerChoices
    //generateAnswerChoices();
}

function showQuestion(){
    questionText.innerText = questionsBtn.question;
}

//imageContainer.addEventListener("click", function(event) {
//   var element = event.target;

function generateAnswerChoices() {
  // for loop i < questions[currentQuestion].answerChoices.length
  // create an element (button)
    var buttonEl = document.createElement("button");
  // write into that element using our answerChoices variable (textContent)
    buttonEl.textContent(answerChoices);
  // add event listener btn.addEventListener("click", validateAnswer)
    buttonEl.addEventListener("click", validateAnswer); 
  // append that question element into our quiz area (appendChild)
    buttonEl.appendChild(quizArea);
}

function validateAnswer(event) { //select answer fuction
    //event.preventDefault();
  // grab text of button that was clicked (event.target.textContent)
    //var userChoice = 
  // conditional statement test userChoice === correctAnswer
  // true
  //    correct answer code
  // false
  //    incorrect answer
  //    decrease timer by 10 secs

  // move onto the next question

  // currentQuestion++
  // conditional statement to check if you've reached the end of the questions array if(currentQuestion === questions.length)
  // end the game (call endGame())
    //endGame()
  // reset quiz area (quizArea.innerHTML = "", loop using .removeChild())

  // call generateQuestion again to start on the next question
   // generateNextQuestion();
}

//function startTimer() {
//  timer = setInterval(function() {
//    if (timeLeft > 1) {
//      // Set the `textContent` of `timerEl` to show the remaining seconds
 //     timerEl.textContent = timeLeft + ' seconds remaining';
//      // Decrement `timeLeft` by 1
//      timeLeft--;
//    } else if (timeLeft === 1) {
//      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//      timerEl.textContent = timeLeft + ' second remaining';
//      timeLeft--;
//    }
//  } ,1000)
//}
var endGamePage = document.getElementById("end-game");

function endGame() {
    
  // end game whether it reaches the end of the quiz or time runs out
  // display none quiz area and display end game div
    if (secondsLeft === 0){
        alert('sorry, out of time');
        questionContent.classList.remove("hide");
        questionContent.classList.add("hide");
        questionText.classList.add("hide");
    }
  // score
    //score = timerCount;
  // display score

  // display high score
}

//function saveScore(event) {
    //event.preventDefault();

    //var scoreObj = {
    //intials: event.target.children[0].value,
    //score: timerCount
    //}
  // sets the score into local storage
    //localStorage.setItem("score", JSON.stringify(scoreObj));
//}

//function getScore() {
  // get high score out of localstorage
    //var score = JSON.parse(localStorage.getItem("score"))
  // display to end game div

//}


//scoreForm.addEventListener("submit", saveScore)


