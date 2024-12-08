let boundaries;
document.addEventListener("DOMContentLoaded", loadPage);

function gameOver(){
    for(let i = 0; i < boundaries.length; i++){
        boundaries[i].style.backgroundColor = "rgb(243, 159, 159)"; 
    }
}

function resetGame(){
    for(let i = 0; i < boundaries.length; i++){
        boundaries[i].style.backgroundColor = "#eeeeee"; 
    }
}

function loadPage(){
    boundaries = document.getElementsByClassName("boundary");
    resetGame();
    for(let i = 0; i < boundaries.length; i++){
        boundaries[i].addEventListener("mouseover", gameOver);
    }
}


