// The box that the timer will display in:
var scoreTimeEl = document.querySelector("#timer");
// The box that questions will display in:
var quizEl = document.querySelector("#quiz");
// The box that Correct or Wrong will display in:
var answerResultsEl = document.querySelector("#answerresults");
// The Start button
var startButtonEl = document.querySelector("#startquiz");
console.log(startButtonEl);
// Variable to track what question you're on
var currentQuestion = 0;

console.log(scoreTimeEl);
console.log(quizEl);
console.log(answerResultsEl);

// Declare "questions" (array of questions)
var questions = [
    {
        question: "Question 1",
        answer: ["A", "B", "C", "D"],
        correctAnswer: "A"
    },
    {
        question: "Question 2",
        answer: ["A", "B", "C", "D"],
        correctAnswer: "A"
    },
    {
        question: "Question 3",
        answer: ["A", "B", "C", "D"],
        correctAnswer: "A"
    },
    {
        question: "Question 4",
        answer: ["A", "B", "C", "D"],
        correctAnswer: "A"
    },
    {
        question: "Question 5",
        answer: ["A", "B", "C", "D"],
        correctAnswer: "A"
    }
]

var timeLeft = 0;

console.log(startButtonEl);
startButtonEl.addEventListener("click", function() {
    countdown();
})


// Manually starts countdown function
// countdown();

// Countdown function pulled from day 1 activity 10
function countdown() {
    timeLeft = 10;
  
    var timeInterval = setInterval(function () {
      if (timeLeft >= 1) {
        scoreTimeEl.textContent = timeLeft;
        timeLeft--;
      } else {
        scoreTimeEl.textContent = "";
        clearInterval(timeInterval);
        // Call a function here if you want it to run when clock hits 0
      }
    }, 1000);
}







