// The box that the timer will display in:
var scoreTimeEl = document.querySelector("#timer");
// The intro section that displays when the quiz page is first loaded:
var introEl = document.querySelector("#intro");
// The box that questions will display in:
var quizEl = document.querySelector("#quiz");
// Ending page that will show final score and allow you to submit your initials:
var finalScoreEl = document.querySelector("#finalscore");
// Span that displays final score:
var scoreEl = document.querySelector("#score");
// The box that Correct or Wrong will display in:
var answerResultsEl = document.querySelector("#answerresults");
// The Start button
var startButtonEl = document.querySelector("#startquiz");
// Variable to track what question you're on
var current = 0;
// The clock as well as final score
var timeLeft = 0;
var timeInterval = "";

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

introEl.addEventListener("click", startQuiz)

quizEl.addEventListener("click", answerQuestion)

// Function for when a user starts the quiz
function startQuiz (event){
    if (event.target.matches("#startquiz")) {
        introEl.style.display = "none";
        quizEl.style.display = "flex";
        current = 0;
        countdown();
        displayQuestion();
    }
}

// Function for posting the current question
function displayQuestion () {
    quizEl.innerHTML = (`
        <h1>${questions[current].question}</h1>
        <div id="answerbutton" data-answer="${questions[current].answers[0]}">${questions[current].answers[0]}</div>
        <div id="answerbutton" data-answer="${questions[current].answers[1]}">${questions[current].answers[1]}</div>
        <div id="answerbutton" data-answer="${questions[current].answers[2]}">${questions[current].answers[2]}</div>
        <div id="answerbutton" data-answer="${questions[current].answers[3]}">${questions[current].answers[3]}</div>
    `)
}

// Function for what to do when someone clicks on a question answer
function answerQuestion(event) {
    if (event.target.matches("#answerbutton")) {
        if (event.target.textContent === questions[current].correctAnswer) {
            answerResultsEl.style.color = "green";
            answerResultsEl.textContent = "Question #" + (current +1) + " Correct!";
        } else {
            timeLeft = (timeLeft - 5);
            answerResultsEl.style.color = "red";
            answerResultsEl.textContent = "Question #" + (current +1) + " Wrong!";
        }
        if (current < (questions.length - 1)) {
            current++;
            displayQuestion();
        } else {
            endQuiz();
        }
    }
} 

// Countdown function
function countdown() {
    timeLeft = 30;
  
    timeInterval = setInterval(function () {
      if (timeLeft >= 1) {
        scoreTimeEl.textContent = timeLeft;
        timeLeft--;
      } else {
        endQuiz();
      }
    }, 1000);
}

// Function to end the quiz
function endQuiz() {
    scoreTimeEl.textContent = "";
    scoreEl.textContent = timeLeft;
    clearInterval(timeInterval);
    answerResultsEl.textContent = "";
    quizEl.style.display = "none";
    finalScoreEl.style.display = "flex";
}