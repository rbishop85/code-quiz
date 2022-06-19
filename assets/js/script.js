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
// The interval for changing the clock
var timeInterval = "";
// List of High Scores
scoresList = [];


var initials = document.querySelector("#initials");

// Declare "questions" (array of questions)
var questions = [
    {
        question: "Which of the following is not a Javascript data type?",
        answers: ["Boolean", "String", "False", "Undefined"],
        correctAnswer: "False"
    },
    {
        question: "Which of the following is an event type?",
        answers: ["dblclick", "click", "scroll", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Which of the following is not a file extension for a common programming language?",
        answers: ["html", "jpg", "js", "css"],
        correctAnswer: "jpg"
    },
    {
        question: "Which character references an object's ID from a css file?",
        answers: ["@", "!", "#", "."],
        correctAnswer: "#"
    },
    {
        question: "Which of the following is not a semantic html element?",
        answers: ["nav", "div", "section", "main"],
        correctAnswer: "div"
    }
]

introEl.addEventListener("click", startQuiz)

quizEl.addEventListener("click", answerQuestion)

finalScoreEl.addEventListener("click", submitScore)

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
        <div id="answerbutton" class ="button" data-answer="${questions[current].answers[0]}">${questions[current].answers[0]}</div>
        <div id="answerbutton" class ="button" data-answer="${questions[current].answers[1]}">${questions[current].answers[1]}</div>
        <div id="answerbutton" class ="button" data-answer="${questions[current].answers[2]}">${questions[current].answers[2]}</div>
        <div id="answerbutton" class ="button" data-answer="${questions[current].answers[3]}">${questions[current].answers[3]}</div>
    `)
}

// Function for what to do when someone clicks on a question answer
function answerQuestion(event) {
    if (event.target.matches("#answerbutton")) {
        if (event.target.textContent === questions[current].correctAnswer) {
            answerResultsEl.style.color = "var(--right)";
            answerResultsEl.style.display = "block";
            answerResultsEl.textContent = "Question #" + (current + 1) + " Correct!";
            setTimeout(answerInterval, 1000);
        } else {
            timeLeft = (timeLeft - 5);
            answerResultsEl.style.color = "var(--wrong)";
            answerResultsEl.style.display = "block";
            answerResultsEl.textContent = "Question #" + (current + 1) + " Wrong!";
            setTimeout(answerInterval, 1000);
        }
        if (current < (questions.length - 1)) {
            current++;
            displayQuestion();
        } else {
            endQuiz();
        }
    }
} 

// Function to clear the temporarily displayed correct or wrong status reguarding question answers
function answerInterval() {
    answerResultsEl.textContent = "";
    answerResultsEl.style.display = "none";
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
    // answerResultsEl.textContent = "";
    quizEl.style.display = "none";
    finalScoreEl.style.display = "flex";
    document.getElementById("initials").focus();
}

function submitScore(event) {
    event.preventDefault();
    if (initials.value === "") {
        return;
      }
    var storedScores = JSON.parse(localStorage.getItem("scoresList"));
    if (storedScores !== null) {
        scoresList = storedScores;
      }
    if (event.target.matches("#submit")) {
        var highScore = {
        initials: initials.value,
        score: scoreEl.textContent
        };
        scoresList.push(highScore);
        console.log(highScore);
        console.log(scoresList);
        localStorage.setItem("scoresList", JSON.stringify(scoresList));
        window.location.href = "./highscores.html";
    }
  }

  