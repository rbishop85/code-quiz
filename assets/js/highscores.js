var scoresList = JSON.parse(localStorage.getItem("scoresList"));
var scoresListEl = document.querySelector("#scoreslist");
var buttonsEl = document.querySelector("#buttons");

console.log(scoresList);

displayScores();

function displayScores() {
    for (let i = 0; i < scoresList.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "scoreitem");
        li.textContent = ((i+1) + ". " + scoresList[i].initials + " - " + scoresList[i].score )
        scoresListEl.appendChild(li);
      }
}

buttonsEl.addEventListener("click", function(event) {
    if (event.target.matches("#back")) {
        window.location.href = "./";
    }
});

buttonsEl.addEventListener("click", function(event) {
    if (event.target.matches("#clearscores")) {
        scoresList = [];
        localStorage.removeItem("scoresList");
        scoresListEl.innerHTML = "";
    }
});
