let homePts = document.getElementById("home-pts");
let guestPts = document.getElementById("guest-pts");
let homeTeam = document.getElementById("home-team");
let guestTeam = document.getElementById("guest-team");
let homeScore = 0;
let guestScore = 0;

function add(team, points){
    if(team === "home"){
        homeScore += points;
        homePts.textContent = homeScore;
    }else{
        guestScore += points;
        guestPts.textContent = guestScore;
    }
    showWinLose();
}

function showWinLose(){
    if(homeScore > guestScore){
        homeTeam.style.backgroundColor = "#19F214";
        guestTeam.style.backgroundColor = "#F01414";
    }else if(homeScore < guestScore){
        guestTeam.style.backgroundColor = "#19F214";
        homeTeam.style.backgroundColor = "#F01414";
    }
    else{
        guestTeam.style.backgroundColor = "#F2662A";
        homeTeam.style.backgroundColor = "#F2662A";
    }
}

function reset(){
    homeScore = 0;
    guestScore = 0;
    homePts.textContent = 0;
    guestPts.textContent = 0;
    guestTeam.style.backgroundColor = "#F2662A";
    homeTeam.style.backgroundColor = "#F2662A";
}

