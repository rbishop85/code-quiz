// Declare timer/score variable (number)
var scoreTimeEl = document.querySelector("#timer");
// variables for page objects ( start button, timer number, main quiz area "any area of the page we need to modify with javascript")
var quizEl = document.querySelector("#quiz");
var answerResultsEl = document.querySelector("#answerresults");

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
countdown();

// Countdown function pulled from day 1 activity 10
function countdown() {
    var timeLeft = 10;
  
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







