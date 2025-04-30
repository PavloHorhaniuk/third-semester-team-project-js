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

let computerChoiceElement = '';
//Game

//COMPUTER AI: 
const getCompuerChoose = () => {
  const randomComputerChoose = Math.floor(Math.random() * options.length);
  return options[randomComputerChoose]
} 

//Game - verification:

const scoreAndStatus = (playerChoose, randomComputerChoose) => {
  if (playerChoose === randomComputerChoose){
    status.textContent = "Нічия!"
    status.style.color = "black"
  } else if (
    playerChoose === "rock" && randomComputerChoose === "scissors" ||
    playerChoose === "paper" && randomComputerChoose === "rock" ||
    playerChoose === "scissors" && randomComputerChoose === "paper"
  ){
    playerScore.textContent = Number(playerScore.textContent) + 1;
    status.textContent = "Ви виграли раунд!"
    status.style.color = "green"
  }else {
    computerScore.textContent = Number(computerScore.textContent) + 1;
    status.textContent = "Комп’ютер виграв раунд!";
    status.style.color = "#990000"
  }
}

//rock bit scissors
const rockBitScissors = () => {
  const playerChoose = "rock";
  computerChoiceElement = getCompuerChoose();
  scoreAndStatus(playerChoose, computerChoiceElement)
  computerChooseElement.textContent = `Вибір комп’ютера: ${computerChoiceElement}`;
};
//paper bit rock
const paperBitRock = () => {
  const playerChoose = "paper";
  computerChoiceElement = getCompuerChoose();
  scoreAndStatus(playerChoose, computerChoiceElement)
  computerChooseElement.textContent = `Вибір комп’ютера: ${computerChoiceElement}`;
};
//scissors bit paper
const scissorsBitPaper = () => {
  const playerChoose = "scissors";
  computerChoiceElement = getCompuerChoose();
  scoreAndStatus(playerChoose, computerChoiceElement)
  computerChooseElement.textContent = `Вибір комп’ютера: ${computerChoiceElement}`;
};
rock.addEventListener("click", rockBitScissors);
paper.addEventListener("click", paperBitRock);
scissors.addEventListener("click", scissorsBitPaper);

computerChoose.addEventListener("click", () => {
  alert("Варіант комп’ютера: " + computerChoiceElement);
})