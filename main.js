const score = {
  playerScore: 0,
  cpuScore: 0,
}

const buttons = document.querySelectorAll(".player-choices-container button");

buttons.forEach(button => {
  button.addEventListener('click', (e)=> game(e.target.textContent));
});



function getComputerChoice(){
  const random = Math.floor(Math.random() * 3);
  const results = ['Rock', 'Paper', 'Scissors'];
  return results[random];
}

function getRoundResult(playerSelection, computerSelection){
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  
  if(playerSelection === computerSelection){
    return "Tie!"
  }

  const choiceHash = {
    Rock : '0',
    Paper: '1',
    Scissors: '2',
  };

  const resultHash = {
    '01' : `You lose! ${computerSelection} beats ${playerSelection}`,
    '02' : `You win! ${playerSelection} beats ${computerSelection}`,
    '12' : `You lose! ${computerSelection} beats ${playerSelection}`,
    '10' : `You win! ${playerSelection} beats ${computerSelection}`,
    '20' : `You lose! ${computerSelection} beats ${playerSelection}`,
    '21' : `You win! ${playerSelection} beats ${computerSelection}`,
  };

  const game = choiceHash[playerSelection]+choiceHash[computerSelection];
  return resultHash[game];
}

function game(userInput){
  // console.log("BEST OF FIVE!")

  
  const computerSelection = getComputerChoice();
  const roundResult = getRoundResult(userInput, computerSelection);

  displayResult(roundResult);
  setScore(roundResult);
  displayScore()
  displayFinalWinner()
}

function setScore(lastResult){
  if(lastResult.includes('win')){
    score.playerScore++;
  } else if(lastResult.includes('lose')){
    score.cpuScore++;
  }
}

function displayScore(){
  const playerScore = document.querySelector("#player-score");
  const cpuScore = document.querySelector("#cpu-score");

  playerScore.textContent = score.playerScore;
  cpuScore.textContent = score.cpuScore;
}


function displayResult(result){
  const resultElement = document.querySelector(".result");
  resultElement.textContent = result
}

function getWinner(){
  if(score.playerScore === 5){
    return "Player"
  } else if (score.cpuScore === 5){
    return "CPU"
  } else {
    return false
  }
}

function displayFinalWinner(){
  const resultElement = document.querySelector(".result");
  const winner = getWinner()
  if(winner){
    buttons.forEach(button => button.disabled = true)
    resultElement.textContent = `${winner} won!`
  }
}