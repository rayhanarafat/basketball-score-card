let pointHome = document.getElementById("point_home")
let pointAway = document.getElementById("point_away")


let home = 0;

let away = 0;

pointHome.textContent = home;

pointAway.textContent = away;

function pointOne() {
    home += 1;
    pointHome.textContent = home;
    winning()
}

function pointTwo() {
    home += 2;
    pointHome.textContent = home;
    winning()
}

function pointThree() {
    home += 3;
    pointHome.textContent = home;
    winning()
}


function pointOne2() {
    away += 1;
    pointAway.textContent = away;
    winning()
}

function pointTwo2() {
    away += 2;
    pointAway.textContent = away;
    winning()
}

function pointThree2() {
    away += 3;
    pointAway.textContent = away;
    winning()
}

let winningTeam = document.getElementById("winning_team");
winningTeam.textContent = "Let's start!"

function winning() {
    if(home > away) {
    winningTeam.textContent = "Home is winning";
    } else if (home == away){
        winningTeam.textContent = "Tie"
    }
     else {
        winningTeam.textContent = "Away Team is winning"
    }
}


function newGame() {
    home = 0;
    away = 0;
    pointHome.textContent = home;
    pointAway.textContent = away;
    winningTeam.textContent = "Let's start!"
}