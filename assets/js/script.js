// The box that the timer will display in:
var scoreTimeEl = document.querySelector("#timer");
// The intro section that displays when the quiz page is first loaded:
var introEl = document.querySelector("#intro");
// The box that questions will display in:
var quizEl = document.querySelector("#quiz");
// The box that the Final Score will display in:
var finalScoreEl = document.querySelector("#finalscore");
// The box that Correct or Wrong will display in:
var answerResultsEl = document.querySelector("#answerresults");
// The Start button
var startButtonEl = document.querySelector("#startquiz");
// Variable to track what question you're on
var current = 0;
// The clock as well as final score
var timeLeft = 0;

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



startButtonEl.addEventListener("click", startQuiz)

document.addEventListener("click", answerQuestion)

function startQuiz (){
    introEl.style.display = "none";
    quizEl.style.display = "flex";
    current = 0;
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
            endQuiz();
            // scoreTimeEl.textContent = "";
            // clearInterval(timeInterval);
            // displayResults();
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
        endQuiz();
        // scoreTimeEl.textContent = "";
        // clearInterval(timeInterval);

        // Call a function here if you want it to run when clock hits 0
      }
    }, 1000);
}

function endQuiz() {
    scoreTimeEl.textContent = "";
    clearInterval(timeInterval);
    displayResults();
}







