const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function announceWinner() {
  if (playerScore === 5) {
    const resultsElement = document.getElementById('results');
    resultsElement.textContent = 'Congratulations! You win the game!';
  } else if (computerScore === 5) {
    const resultsElement = document.getElementById('results');
    resultsElement.textContent = 'Computer wins. Better luck next time!';
  }
}

document.getElementById('rock').addEventListener('click', function () {
  const result = playRound('rock');
  const resultsElement = document.getElementById('results');
  resultsElement.textContent = `Round: ${result}`;
  updateScore();
  announceWinner();
});

document.getElementById('paper').addEventListener('click', function () {
  const result = playRound('paper');
  const resultsElement = document.getElementById('results');
  resultsElement.textContent = `Round: ${result}`;
  updateScore();
  announceWinner();
});

document.getElementById('scissors').addEventListener('click', function () {
  const result = playRound('scissors');
  const resultsElement = document.getElementById('results');
  resultsElement.textContent = `Round: ${result}`;
  updateScore();
  announceWinner();
});

  
  
  