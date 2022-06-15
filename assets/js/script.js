// The box that the timer will display in:
var scoreTimeEl = document.querySelector("#timer");
// The box that questions will display in:
var quizEl = document.querySelector("#quiz");
// The box that Correct or Wrong will display in:
var answerResultsEl = document.querySelector("#answerresults");
// The Start button
var startButtonEl = document.querySelector("#startquiz");
// The Answer buttons
// var answerButtonEl = "";
// console.log(answerButtonEl);
// Variable to track what question you're on
var current = 0;

// Declare "questions" (array of questions)
var questions = [
    {
        question: "Question 1",
        answers: ["1A", "1B", "1C", "1D"],
        correctAnswer: "1A"
    },
    {
        question: "Question 2",
        answers: ["2A", "2B", "2C", "2D"],
        correctAnswer: "2A"
    },
    {
        question: "Question 3",
        answers: ["3A", "3B", "3C", "3D"],
        correctAnswer: "3A"
    },
    {
        question: "Question 4",
        answers: ["4A", "4B", "4C", "4D"],
        correctAnswer: "4A"
    },
    {
        question: "Question 5",
        answers: ["5A", "5B", "5C", "5D"],
        correctAnswer: "5A"
    }
]
var htmlTemplate = "";

//Function for posting current question
function displayQuestion () {
    quizEl.innerHTML = "";

    quizEl.innerHTML = (
        "<h1>" + questions[current].question + "</h1>" + 
        "<div id='answerbutton'>" + questions[current].answers[0] + "</div>" + 
        "<div id='answerbutton'>" + questions[current].answers[1] + "</div>" + 
        "<div id='answerbutton'>" + questions[current].answers[2] + "</div>" + 
        "<div id='answerbutton'>" + questions[current].answers[3] + "</div>")
}

function displayResults () {
    quizEl.innerHTML = "";

    quizEl.innerHTML = "<h1>Your score is: " + timeLeft + "!</h1>"

}

var timeLeft = 0;

startButtonEl.addEventListener("click", startQuiz)

document.addEventListener("click", answerQuestion)

function startQuiz (){
    countdown();
    displayQuestion();
}

var timeInterval = "";
// Function for what to do when someone clicks on a question answer
function answerQuestion(event) {
    if (event.target.matches("#answerbutton")) {
        console.log(current);
        if (event.target.textContent === questions[current].correctAnswer) {
            console.log("Correct");
        } else {
            console.log("Wrong! Answer was: " + questions[current].correctAnswer);
            timeLeft = (timeLeft - 5);
        }
        if (current < (questions.length - 1)) {
            current++;
            displayQuestion();
        } else {
            console.log("Your Score is: " + timeLeft)
            scoreTimeEl.textContent = "";
            clearInterval(timeInterval);
            displayResults();
        }
    }
} 

// Countdown function pulled from day 1 activity 10
function countdown() {
    timeLeft = 30;
  
    timeInterval = setInterval(function () {
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







