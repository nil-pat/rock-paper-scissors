let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector("score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const choices = ['rock','paper','scissors'];

//calculate computer's choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function convWord(word) {
    if (word == 'rock') return 'Rock';
    if (word == 'paper') return 'Paper';
    if (word == 'scissors') return 'Scissors';
}

//do this when player wins
function win(playerChoice,computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convWord(playerChoice)} beats ${convWord(computerChoice).toLowerCase()}. You win!`;
    playerChoice_div.classList.add('green-glow');
    setTimeout(() => playerChoice_div.classList.remove('green-glow'),300);
}

//do this when player loses
function lose(playerChoice,computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convWord(playerChoice)} loses to ${convWord(computerChoice).toLowerCase()}. You lose!`;
    playerChoice_div.classList.add('red-glow');
    setTimeout(() => playerChoice_div.classList.remove('red-glow'),300);
}

//do this when player ties
function tie(playerChoice,computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    result_p.innerHTML = `${convWord(playerChoice)} equals ${convWord(computerChoice).toLowerCase()}. It's a tie.`;
    playerChoice_div.classList.add('gray-glow');
    setTimeout(() => playerChoice_div.classList.remove('gray-glow'),300);
}

//determine outcome of the game
function game(playerChoice) {  
    const computerChoice = getComputerChoice();
    playerChoice_index = choices.indexOf(playerChoice);
    computerChoice_index = choices.indexOf(computerChoice);
    // if choices are the same, it's a tie
    if (playerChoice_index == computerChoice_index) {
        tie(playerChoice,computerChoice);
    } 
    // if computer picks the next choice in the choices array, 
    // relative to the player, player loses.
    else if (computerChoice_index == (playerChoice_index + 1)%choices.length) {
        lose(playerChoice,computerChoice);
    }
    // else, player wins
    else {
        win(playerChoice,computerChoice);
    }
}

//event listener
function main (){
    rock_div.addEventListener('click',() => game('rock'))
    paper_div.addEventListener('click',() => game('paper'))
    scissors_div.addEventListener('click',() => game('scissors'))
}

main();