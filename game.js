

//Initialized variables
let is_game_running = false; 
let score = 0;
let countdownTime = 15;
let gameStarted = false;
let isTimerRunning = false;
let gameFinished = false;


//Declared variables
let end;
let start;
let boundaries;
let status_display; 
let clock;
let timeInterval;
let coins;

let coinCollectAudio;
let gameEndAudio;
let winnerAudio;




document.addEventListener("DOMContentLoaded", loadPage);

function displayScore(message){
    if(message != "")
        status_display.innerHTML = message + " Your Score is: " + score;
}

//executing when mouseover boundaries to make them red 
function gameOver(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(243, 159, 159)"; //light red
        if(score > 0)
            score = score - 1;
        displayScore("Round is over!");
        is_game_running = false; //not to make the function endGame execute when round is over
    }
}

//start game when clicking on S
function startGame(){
    if(!gameFinished) {
        displayScore("Round started!");
        for (let i = 0; i < coins.length; i++)
            coins[i].style.visibility = "visible";
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "#eeeeee"; // grey
        startTimer();
        disappearCoins();
        gameStarted = true;
        is_game_running = true;
}}

//ending game when mouese is over E
function endGame(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(113 225 141)"; //light green
        score = score + 5;
        displayScore("You Won!");
        is_game_running = false;
        winner();
    }
}

function loadPage(){
    end = document.getElementById("end");
    start = document.getElementById("start");
    boundaries = document.getElementsByClassName("boundary");
    status_display = document.getElementById("status");
    clock = document.getElementById("countdownTimer");
    coins = document.getElementsByClassName("icon");
    coinCollectAudio = document.getElementById("coinAudio");
    gameEndAudio = document.getElementById("gameOverAudio");
    winnerAudio = document.getElementById("winnerAudio");
    
    end.addEventListener("mouseover", endGame);
    start.addEventListener("click", startGame);
    for(let i = 0; i < boundaries.length; i++){
        boundaries[i].addEventListener("mouseover", gameOver);
    }
    
}

//stating when to start the countdown timer
function startTimer() {
    if (!isTimerRunning){
        timeInterval = setInterval(timer, 1000);
        gameStarted = true;
        is_game_running = true;
    }
    isTimerRunning = true; //not to let setInterval get called everytime startTimer is called
}

//setting a countdown timer for the game
function timer() {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;

    if ((minutes == 0) && (seconds == 0)){
        clearInterval(timeInterval);
        gameOver();
        gameStarted = false;
        is_game_running = false;
        gameFinished = true;
        stopGame();
        gameOverAudio();
    }
    if (seconds < 10) 
        seconds = "0" + seconds;
    if (minutes < 10)
        minutes = "0" + minutes;

    clock.innerHTML = minutes + ":" + seconds;

    countdownTime--;
}


// make the coins disappear when mouseover
function disappearCoins() {
    if(is_game_running) {
        for(let i = 0; i < coins.length; i++){
            coins[i].addEventListener("mouseover", function() {
                this.style.visibility = "hidden";
                score += 1;
            })
            coinAudio.curretTime = 0;
            coins[i].addEventListener("mouseover", coinAudioPlay);
        }
    }
}

function stopGame() {
    if(gameFinished) {
        for(let i = 0; i < boundaries.length; i++) {
            boundaries[i].style.backgroundColor = "rgb(243, 159, 159)";
        }
        displayScore("Game over!");
    }
}


function coinAudioPlay() {
    coinCollectAudio.play();
}

function gameOverAudio() {
    gameEndAudio.play();
}

function winner() {
    winnerAudio.play();
}