function getComputerChoice(){
  const random = Math.floor(Math.random() * 3)
  const results = ['Rock', 'Paper', 'Scissors']
  return results[random]
}

function getRoundResult(playerSelection, computerSelection){
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
  
  if(playerSelection === computerSelection){
    return "Tie!"
  }

  const choiceHash = {
    Rock : '0',
    Paper: '1',
    Scissors: '2',
  }

  const resultHash = {
    '01' : `You lose! ${computerSelection} beats ${playerSelection}`,
    '02' : `You win! ${playerSelection} beats ${computerSelection}`,
    '12' : `You lose! ${computerSelection} beats ${playerSelection}`,
    '10' : `You win! ${playerSelection} beats ${computerSelection}`,
    '20' : `You lose! ${computerSelection} beats ${playerSelection}`,
    '21' : `You win! ${playerSelection} beats ${computerSelection}`,
  }

  const game = choiceHash[playerSelection]+choiceHash[computerSelection]
  return resultHash[game]
}

function game(){
  console.log("BEST OF FIVE!")
  const score = {
    playerScore: 0,
    cpuScore: 0,
  }
  
  for(let i = 0; i < 5; i++){
    const userInput = prompt("Write your choice!")
    const computerSelection = getComputerChoice()
    const roundResult = getRoundResult(userInput, computerSelection)

    if(roundResult.includes('win')){
      score.playerScore++;
    } else if(roundResult.includes('lose')){
      score.cpuScore++;
    }

    console.log(roundResult)
  }

  console.log(`
  Player Score: ${score.playerScore}
  CPU Score: ${score.cpuScore}
  `)

}

game()