var timeEl = document.querySelector("#time");
var secondsLeft = 76; //so that it starts counting down from 75 seconds
var timerInterval;

var questionsArray = [
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

var startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", startGame); //adds event listener to start button to start the timer

function startGame() {
  console.log("started");

  startBtn.classList.add("hide");
  quizTitlePage.classList.add("hide");
  questionContent.classList.remove("hide");
  questionText.classList.remove("hide");
  questionsArray = questionsArray.sort(() => Math.random() -.5);
  currentQuestionIndex = 0;

  showQuestion();
  generateAnswerChoices();
  startTimer();//line 24
}

function startTimer(event) {
    // Sets interval in variable
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
    
      if(secondsLeft === 0) {
      // Stops execution of action at set interval
        timeEl.textContent = '';
        clearInterval(timerInterval);
        endGame();
        stopTimer();
      }
    } ,1000);
}

function stopTimer() {
  timeEl.textContent = '';
  clearInterval(timerInterval);
}

//2. The quiz options
var quizArea = document.getElementById("quiz");
var questionContent = document.getElementById("questionContainer");
var questionText = document.getElementById("question");
var questionsBtn = document.getElementById("answer-next-buttons");
var quizTitlePage = document.getElementById("startPage");
var answerText = document.querySelectorAll(".answer")

var answerButtonsElement = document.getElementById("answer-next-buttons");
var score; //this will be the seconds left

var shuffledQuestions, currentQuestionIndex;




function generateNextQuestion() {
  validateAnswer(this.textContent);//line 110
  currentQuestionIndex++;
  showQuestion();//line 97
  generateAnswerChoices();//line 101
  if (questionsArray.length <= currentQuestionIndex + 1) {
    endGame();//line 125
    stopTimer();//line 40
  }
}

function showQuestion(){
  questionText.innerText = questionsArray[currentQuestionIndex].question;
}

function generateAnswerChoices() {
  for (i=0; i<answerText.length; i++){
    answerText[i].textContent = questionsArray[currentQuestionIndex].answerChoices[i];
    // answerText[i].addEventListener("click", generateNextQuestion);
    answerText[i].removeEventListener("click", generateNextQuestion); // Remove event listener
    answerText[i].addEventListener("click", generateNextQuestion); // Attach new event listener
  }
}
var correctText = document.getElementById("correctTextDisplay");
var wrongText = document.getElementById("wrongTextDisplay");

function validateAnswer(buttonText) { 
  
  if (buttonText===questionsArray[currentQuestionIndex].correctAnswer){
    correctText.classList.remove("hide");
    wrongText.classList.add("hide");
  }
  else {
    wrongText.classList.remove("hide");
    correctText.classList.add("hide");
    secondsLeft = secondsLeft -10; // subtracts ten seconds from timer when question is answered incorrectly
  }
}

var endGamePage = document.getElementById("end-game");
var finalScoreText = document.getElementById("finalScore");
function endGame() {
  // end game whether it reaches the end of the quiz or time runs out
  if (secondsLeft == 0){
    questionContent.classList.add("hide");
    questionText.classList.add("hide");
    correctText.classList.add("hide");
    wrongText.classList.add("hide");
    quizArea.classList.add("hide");
    endGamePage.classList.remove("hide");
  }
  if (questionsArray.length) {
    questionContent.classList.add("hide");
    questionText.classList.add("hide");
    correctText.classList.add("hide");
    wrongText.classList.add("hide");
    quizArea.classList.add("hide");
    endGamePage.classList.remove("hide");
  }
  
  finalScoreText.textContent = secondsLeft;
}

var initialEl = document.getElementById("initialInput");
var saveBtn = document.getElementById("saveScoreBtn");
saveBtn.addEventListener("click", saveScore);

function saveScore(event) {
  event.preventDefault();
  
  var scoreObj = {
    initials: initialEl.value,
    score: secondsLeft,
  }
  // sets the score into local storage
  localStorage.setItem("scoreObj", JSON.stringify(scoreObj));
  endGamePage.classList.add("hide");
  getScore();
}
var highScoreLink = document.getElementById("high-score-link");
highScoreLink.addEventListener("click", getScore);

var highScoreList = document.getElementById("highScoreList");
var highScorePage = document.getElementById("high-score-page");
function getScore() {
  questionContent.classList.add("hide");
  questionText.classList.add("hide");
  correctText.classList.add("hide");
  wrongText.classList.add("hide");
  quizArea.classList.add("hide");
  highScorePage.classList.remove("hide");
  // get high score out of localstorage
  var score = JSON.parse(localStorage.getItem("scoreObj"));
  // display to end game div
  console.log(score);
  var highScoreItemEl = document.createElement('li');

  highScoreItemEl.textContent = score.initials + " : " + score.score;
  highScoreList.appendChild(highScoreItemEl);
}

//clear history function
// var clearHistoryBtnEl = document.getElementById("clearHistoryBtn");
// clearHistoryBtnEl.addEventListener("click", clearHistory);

//restart game event listener
var startOverBtnEl = document.querySelector("#startOverBtn");
startOverBtnEl.addEventListener("click", startGameOver);

function startGameOver() {
  highScorePage.classList.add("hide");
  quizArea.classList.remove("hide");
  questionContent.classList.remove("hide");
  questionText.classList.remove("hide");
  startBtn.classList.add("hide");
  quizTitlePage.classList.add("hide");
  clearInterval(timerInterval);

  showQuestion();
  generateNextQuestion();
  generateAnswerChoices();
  startTimer();
}
