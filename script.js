//Function for the opponent

function getComputerChoice() {
    let r = 'rock';
    let p = 'paper';
    let s = 'scissors';
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return r;
    }
    else if (random === 1) {
        return p;
    }
    else {
        return s;
    }
}

//Function for the player

function getHumanChoice() {
    let r = 'rock';
    let p = 'paper';
    let s = 'scissors';
    let choice = prompt('Choose: \nRock \nPaper \nScissors');
    if (choice.toLowerCase() === 'rock') {
        return r;
    }
    else if (choice.toLowerCase() === 'paper') {
        return p;
    }
    else if (choice.toLowerCase() === 'scissors') {
        return s;
    }
    else {
        alert('Invalid choice');
    }
}

//The Game

function playGame() {
let human = 0;
let computer = 0;

let round = parseInt(prompt('How many rounds do you want to play?'));
for (let i = 0; i < round; i++) {
    let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
    alert(`Computer: ${computerSelection}`);
    if (humanSelection === 'rock' && computerSelection === 'paper') {
        alert('You Lose! \nPaper beats Rock');
        computer++;
    }
    else if (humanSelection === 'rock' && computerSelection === 'scissors') {
        alert('You Win! \nRock beats Paper');
        human++;
    }
    else if (humanSelection === 'paper' && computerSelection === 'rock') {
        alert('You Win! \nPaper beats Rock');
        human++;
    }
    else if (humanSelection === 'paper' && computerSelection === 'scissors') {
        alert('You Lose! \nScissors beats Paper');
        computer++;
    }
    else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        alert('You Win! \nScissors beats Paper');
        human++;
    }
    else if (humanSelection === 'scissors' && computerSelection === 'rock') {
        alert('You Lose! \nRock beats Scissors');
        computer++;
    } 
    else {
        alert('Draw!')
    }
    alert(`Score \nYou: ${human}\nComputer: ${computer}`);
}
if (human > computer) {
    alert('Congratulations! \nYou Win!');
}
else if (human < computer) {
    alert('Sorry but you lost!');
}
else {
    alert('Its a draw!');
}
}

playGame();
