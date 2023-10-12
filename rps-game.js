function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
  
    // Check for valid player input
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
      return 'Invalid input. Please choose Rock, Paper, or Scissors.';
    }
  
    // Determine the winner
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      let playerSelection;
  
      // Prompt the user until they enter a valid choice
      do {
        playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        playerSelection = playerSelection ? playerSelection.trim() : playerSelection;
        playerSelection = playerSelection ? playerSelection.toLowerCase() : '';
      } while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors');
  
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      console.log(`Round ${round}: ${result}`);
  
      if (result.includes('Win')) {
        playerScore++;
      } else if (result.includes('Lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log('Congratulations! You win the game!');
    } else if (computerScore > playerScore) {
      console.log('Computer wins. Better luck next time!');
    } else {
      console.log("It's a tie. Play again!");
    }
  }
  
  // Start the game
  game();
  
  
  
  
  