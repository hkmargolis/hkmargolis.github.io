// data.js GeeksForGeeks

function startGame() {
    document.getElementById("startScreen")
        .style.display = "none";
    document.getElementById("gameScreen")
        .style.display = "block";
    Text.draw(`Click to play!`);
    canvas.removeEventListener('click',
        startGame);
    canvas.addEventListener('click', x);
}

document.getElementById("startButton")
    .addEventListener("click", startGame);