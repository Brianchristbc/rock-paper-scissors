function getComputerChoice() {
  let computerSelection;
  const number = Math.random()
  if (number > 0 && number <= 1/3) {
    computerSelection = "rock"
  } else if (number > 1/3 && number <= 2/3) {
    computerSelection = "paper"
  } else {
    computerSelection = "scissors"
  }
  return computerSelection;
}

function getPlayerChoice() {
  let playerSelection;
  playerSelection = (prompt("What are you choosing?")).toLowerCase();
  return playerSelection;
}

function playGame() {
  let computerScore = 0;
  let playerScore = 0;
  let gameNumber = 0;


  while (gameNumber <= 5) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    console.log(`You chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    if (computerSelection === "rock") {
      if (playerSelection === "rock") {
        gameNumber++;
        alert(`Your score: ${playerScore}\nComputer score: ${computerScore}\nTie`);
      } else if (playerSelection === "scissors") {
        computerScore ++;
        gameNumber++;
        alert(`Your score: ${playerScore}\nComputer score: ${computerScore}\nYou lose`);
      } else if (playerSelection === "paper") {
        playerScore++;
        gameNumber++;
        alert(`Your score: ${playerScore}\nComputer score: ${computerScore}\nYou win`);
      }
    }

    else if (computerSelection === "paper") {
      if (playerSelection === "rock") {
        computerScore++;
        gameNumber++;
        alert(`Your score: ${playerScore}\nComputer score: ${computerScore}\nYou lose`);
      } else if (playerSelection === "scissors") {
        playerScore++;
        gameNumber++;
        alert(`Your score: ${playerScore}\nComputer score: ${computerScore}\nYou win`);
      } else if (playerSelection === "paper") {
        gameNumber++;
        alert(`Your score: ${playerScore}\nComputer score: ${computerScore}\nTie`);
      }
    }

    else if (computerSelection === "scissors") {
      if (playerSelection === "rock") {
        playerScore++;
        gameNumber++;
        alert(`Your score: ${playerScore}\nComputer score: ${computerScore}\nYou win`);
      } else if (playerSelection === "scissors") {
        gameNumber++;
        alert(`Your score: ${playerScore}\nComputer score: ${computerScore}\nTie`);
      } else if (playerSelection === "paper") {
        computerScore++;
        gameNumber++;
        alert(`Your score: ${playerScore}\nComputer score: ${computerScore}\nYou lose`);
      }
    }
  }
    if (computerScore > playerScore) {
      alert("the robots have won")
    } else if (playerScore > computerScore) {
      alert("time to head to the genius bar")
    }
  }


playGame()