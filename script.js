var userScore = 0;
var computerScore = 0;


// Updating the initial User and Computer score values//
function updateScores() {
    document.getElementById("user-score").innerHTML = `User Score: ${userScore}`;
    document.getElementById("computer-score").innerHTML = `Computer Score: ${computerScore}`;
};

updateScores()

var didUSerChoose = false;
var userChoice;


//Function for one round of the game//
function gameRound(user, computer) {
    if (user == computer) {
        document.getElementById("go-again").innerHTML = "Tied round, go again";
    }
    else if (user == 'rock' && computer == 'paper') {
        document.getElementById("go-again").innerHTML = "Computer gets a point";
        computerScore++;
        updateScores();
        return computerScore;
    }
    else if (user == 'rock' && computer == 'scissors') {
        document.getElementById("go-again").innerHTML = "User gets a point"
        userScore++;
        updateScores()
        return userScore;
    }

    else if (user == 'paper' && computer == 'scissors') {
        document.getElementById("go-again").innerHTML = "Computer gets a point";
        computerScore++;
        updateScores();
        return computerScore;
    }
    else if (user == 'paper' && computer == 'rock') {
        document.getElementById("go-again").innerHTML = "User gets a point"
        userScore++;
        updateScores()
        return userScore;
    }

    else if (user == 'scissors' && computer == 'rock') {
        document.getElementById("go-again").innerHTML = "Computer gets a point";
        computerScore++;
        updateScores();
        return computerScore;
    }
    else if (user == 'scissors' && computer == 'paper') {
        document.getElementById("go-again").innerHTML = "User gets a point"
        userScore++;
        updateScores()
        return userScore;
    }
}

//creating the function to create the computer's move//
var computerChoice = "";
function createComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
        document.getElementById("computer-last").innerHTML = "Rock";
        computerChoice = "rock";
        console.log(computerChoice);
    }
    else if (x == 2) {
        document.getElementById("computer-last").innerHTML = "Paper";
        computerChoice = "paper";
        console.log(computerChoice);
    }
    else {
        document.getElementById("computer-last").innerHTML = "Scissors";
        computerChoice = "scissors";
        console.log(computerChoice);
    };
}



//functions for the Rock Paper and Scissors buttons //
document.getElementById("rock").onclick = function() {clickRock()};
function clickRock() {
    didUSerChoose = true;
    userChoice = "rock"
    console.log(didUSerChoose, userChoice)
    document.getElementById("user-last").innerHTML = "Rock";
    createComputerChoice();
    gameRound(userChoice, computerChoice)
    return didUSerChoose , userChoice;
}


document.getElementById("paper").onclick = function() {clickPaper()};
function clickPaper() {
    didUSerChoose = true;
    userChoice = "paper"
    console.log(didUSerChoose, userChoice)
    document.getElementById("user-last").innerHTML = "Paper";
    createComputerChoice();
    gameRound(userChoice, computerChoice)
    return didUSerChoose , userChoice;
}


document.getElementById("scissors").onclick = function() {clickScissors()};
function clickScissors() {
    didUSerChoose = true;
    userChoice = "scissors"
    console.log(didUSerChoose, userChoice)
    document.getElementById("user-last").innerHTML = "Scissors";
    createComputerChoice();
    gameRound(userChoice, computerChoice)
    return didUSerChoose , userChoice;
}



// Test the output of the didUserChoose and userChoice variables //
document.getElementById("test").onclick = function() {clickTest()};
function clickTest() {
    console.log(didUSerChoose, userChoice)
    console.log(computerChoice);
    return didUSerChoose , userChoice;
}




//The main function for the game//

