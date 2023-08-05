let computerScore = 0;
let playerScore = 0;
let gameNumber = 0;

const results = document.createElement('div');
results.classList.add = 'results';
const output = document.querySelector('.output')
// output.appendChild(results)

const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');



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


function playGame(playerSelection) {
  console.log(gameNumber)
  if (gameNumber === 5) {
    if (computerScore > playerScore) {
      output.textContent = ("the robots have won")
      return;
    } else if (playerScore > computerScore) {
      output.textContent = ("time to head to the genius bar")
      return;
    }
  }

    let computerSelection = getComputerChoice();
    playerChoice.textContent = (`You chose ${playerSelection}`);
    computerChoice.textContent = (`Computer chose ${computerSelection}`);
    if (computerSelection === "rock") {
      if (playerSelection === "rock") {
        gameNumber++;
        output.textContent = (`Your score: ${playerScore}\nComputer score: ${computerScore}\nTie`);
      } else if (playerSelection === "scissors") {
        computerScore ++;
        gameNumber++;
        output.textContent = (`Your score: ${playerScore}\nComputer score: ${computerScore}\nYou lose`);
      } else if (playerSelection === "paper") {
        playerScore++;
        gameNumber++;
        output.textContent = (`Your score: ${playerScore}\nComputer score: ${computerScore}\nYou win`);
      }
    }

    else if (computerSelection === "paper") {
      if (playerSelection === "rock") {
        computerScore++;
        gameNumber++;
        output.textContent = (`Your score: ${playerScore}\nComputer score: ${computerScore}\nYou lose`);
      } else if (playerSelection === "scissors") {
        playerScore++;
        gameNumber++;
        output.textContent = (`Your score: ${playerScore}\nComputer score: ${computerScore}\nYou win`);
      } else if (playerSelection === "paper") {
        gameNumber++;
        output.textContent = (`Your score: ${playerScore}\nComputer score: ${computerScore}\nTie`);
      }
    }

    else if (computerSelection === "scissors") {
      if (playerSelection === "rock") {
        playerScore++;
        gameNumber++;
        output.textContent = (`Your score: ${playerScore}\nComputer score: ${computerScore}\nYou win`);
      } else if (playerSelection === "scissors") {
        gameNumber++;
        output.textContent = (`Your score: ${playerScore}\nComputer score: ${computerScore}\nTie`);
      } else if (playerSelection === "paper") {
        computerScore++;
        gameNumber++;
        output.textContent = (`Your score: ${playerScore}\nComputer score: ${computerScore}\nYou lose`);
      }
    }
   }




const playerSelection = document.querySelectorAll('button');
playerSelection.forEach((playerSelection) => {
  playerSelection.addEventListener('click', (e) => {
    playGame(playerSelection = e.target.className)
  })
})

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  gameNumber = 0;
  playerScore = 0;
  computerScore = 0;
  output.textContent = "PLAY AGAIN";
  playerChoice.textContent = "";
  computerChoice.textContent = "";
})
