//Initialized variables
let is_game_running = false; 
let score = 0;
let countdownTime = 120;
let isTimerRunning = false;

//Declared variables
let end;
let start;
let boundaries;
let status_display; 
let clock;





document.addEventListener("DOMContentLoaded", loadPage);

function displayScore(message){
    if(message != "")
        status_display.innerHTML = message + " Your Score is: " + score;
}

function gameOver(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(243, 159, 159)"; 
        if(score > 0)
            score = score - 1;
        displayScore("Game Over!");
        is_game_running = false;
    }
}

function startGame(){
    displayScore("");
    is_game_running = true;
    for(let i = 0; i < boundaries.length; i++)
        boundaries[i].style.backgroundColor = "#eeeeee"; 
    startTimer();
}

function endGame(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(113 225 141)"; 
        score = score + 5;
        displayScore("You Won!");
        is_game_running = false;
    }
}

function loadPage(){
    end = document.getElementById("end");
    start = document.getElementById("start");
    boundaries = document.getElementsByClassName("boundary");
    status_display =  document.getElementById("status");
    clock = document.getElementById("countdownTimer");

    end.addEventListener("mouseover", endGame);
    start.addEventListener("click", startGame);
    for(let i = 0; i < boundaries.length; i++){
        boundaries[i].addEventListener("mouseover", gameOver);
    }
}

function startTimer() {
    if (!isTimerRunning)
        setInterval(timer, 1000);
    isTimerRunning = true;
}


function timer() {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;

    clock.innerHTML = minutes + ":" + seconds;

    countdownTime--;
}

