function updateScore() {
    score = score + 1;
    document.getElementById("score").innerHTML = "Score: " + score;
}

function saveScore() {
    localStorage.setItem("score", score);
}

function nextPage() {
    window.location = "game_page.html";
}