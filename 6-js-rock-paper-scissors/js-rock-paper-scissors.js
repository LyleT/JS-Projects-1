const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("User did not input a valid choice");
  }
};

const getComputerChoice = () => {
  index = Math.floor(Math.random() * 3);
  if (index === 0) {
    return "rock";
  } else if (index === 1) {
    return "paper";
  } else if (index === 2) {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You won!";
  }

  if (userChoice === computerChoice) {
    return "Tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else if (computerChoice === "scissors") {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You won!";
    } else if (computerChoice === "scissors") {
      return "Computer won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else if (computerChoice === "paper") {
      return "You won!";
    }
  }
};

function playGame() {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("Computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
