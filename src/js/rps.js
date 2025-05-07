// rock
// paper
// scissors
//computer-score
// player-score
// status
// computer-choose

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");
const status = document.querySelector(".rps-game__status");
const computerChoose = document.querySelector(".rps-game__btn");

playerScore.textContent = 0;
computerScore.textContent = 0;

const options = ["rock", "paper", "scissors"];
let computerChoiceElement = "";

// Очищення попереднього підсвічування
const clearBg = () => {
  rock.style.backgroundColor = "";
  paper.style.backgroundColor = "";
  scissors.style.backgroundColor = "";
};

// Повертає випадковий вибір комп’ютера
const getCompuerChoose = () => {
  const randomComputerChoose = Math.floor(Math.random() * options.length);
  return options[randomComputerChoose];
};

// Підсвічування вибору комп’ютера
const highlightComputerChoice = (choice) => {
  clearCompHighlight();
  const element = document.querySelector("." + choice);
  if (element) {
    element.style.backgroundColor = "#007bff"; // синій для комп’ютера
  }
};

// Очищення підсвічування комп’ютера
const clearCompHighlight = () => {
  [rock, paper, scissors].forEach((el) => {
    if (el.style.backgroundColor === "rgb(0, 123, 255)") {
      el.style.backgroundColor = "";
    }
  });
};

// Логіка гри
const scoreAndStatus = (playerChoose, randomComputerChoose) => {
  if (playerChoose === randomComputerChoose) {
    status.textContent = "Нічия!";
    status.style.color = "black";
    status.style.fontWeight = "bold";
  } else if (
    (playerChoose === "rock" && randomComputerChoose === "scissors") ||
    (playerChoose === "paper" && randomComputerChoose === "rock") ||
    (playerChoose === "scissors" && randomComputerChoose === "paper")
  ) {
    playerScore.textContent = Number(playerScore.textContent) + 1;
    status.textContent = "Ви виграли раунд!";
    status.style.color = "green";
    status.style.fontWeight = "normal";
  } else {
    computerScore.textContent = Number(computerScore.textContent) + 1;
    status.textContent = "Комп’ютер виграв раунд!";
    status.style.color = "#990000";
    status.style.fontWeight = "normal";
  }
};

// Обробка вибору гравця
const handlePlayerChoice = (playerChoose, element) => {
  clearBg();
  element.style.backgroundColor = "#D7D7D7";

  computerChoiceElement = getCompuerChoose();
  highlightComputerChoice(computerChoiceElement);
  scoreAndStatus(playerChoose, computerChoiceElement);

  computerChoose.textContent = `Вибір комп’ютера: ${computerChoiceElement}`;
};

// Обробники подій
rock.addEventListener("click", () => handlePlayerChoice("rock", rock));
paper.addEventListener("click", () => handlePlayerChoice("paper", paper));
scissors.addEventListener("click", () => handlePlayerChoice("scissors", scissors));