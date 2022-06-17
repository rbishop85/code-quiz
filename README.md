# Coding Quiz

Timed coding quiz featuring dynamically updated HTML and CSS powered by Javascript


// Player presses button on page to start quiz
    // Timer displays and starts ticking down
    // First Question Displayed

// If A player gets a question correct then the quiz advances to the next question and "Correct" is briefly displayed under the quiz

// If A player gets a question wrong then the quiz still advances to the next question but "Wrong" is briefly displayed at the bottom and the timer loses an additional 5sec (maybe have correct/wrong section have a green vs red background based on result)

// Upon answering all questions or running out of time they will see their final score and have a chance to submit their initials. (Hitting submit automatically takes them to the high scores page.)





// Class Demo
// separate js file for game and highscores page
// separate html page for high scores and index
// Don't have to name index.html when linking from high scores back to index, can just href="./"


// change id tag on quiz section to change it to a style where it's hidden instead of replacing it?


// for collecting high score refer to day 2 activity 13 for similar example to collect and put into variable
    // input item, and submit button

// event.target ? for info on button clicked

// end game

// append game ending into timer function if it hits 0


// Function to record high score
// div for start screen <-- hide when questions start
// div for questions <--> shown on start, hidden when you go to highscores div
// div for highscores <-- shown after game ends

// insert data attributes into buttons
// template literal backtic ` around html template instead of quotes
