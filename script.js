user_score = 0;
comp_score = 0;

const choices =  document.querySelectorAll(".choice");

const genCompChoice = ()=>{
    const items = ["rock", "paper", "scissor"];

    const compChoice = items[Math.floor(Math.random() * 3)];
    return compChoice;
}

const showWinnner = (userWin) =>{
    if(userWin){
        console.log("You win");
        user_score += 1;
        document.getElementById("result").innerText = "You Win!";
        document.getElementById("userScore").innerText = user_score;
        document.getElementById("result").style.backgroundColor = "Green";
        
    }
    else{
        console.log("You Lose");
        comp_score += 1;
        document.getElementById("result").innerText = "You Lose!";
        document.getElementById("compScore").innerText = comp_score;
        document.getElementById("result").style.backgroundColor = "red";
    }
}

const playGame = (choiceID) =>{
    let compChoice = genCompChoice();
    console.log(compChoice);
    if(compChoice === choiceID){
        // document.getElementById("result").innerText = "Match Drawn";
        console.log("Match Draw");
    }
    else{
        userWin = true;
        if(choiceID === "rock"){
            //paper, scissor
            userWin = compChoice === "paper" ? false : true;
        }
        if(choiceID === "paper"){
            //rock, scissor
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            //rock, paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinnner(userWin);
    }
}


choices.forEach((element) => {
    element.addEventListener("click", ()=>{
        console.log(element.getAttribute("id"));
        const choiceID = element.getAttribute("id");
        playGame(choiceID);
    })
});