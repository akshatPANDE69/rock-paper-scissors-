

const playerChoiceRock = document.querySelector('#rock');
const playerChoicePaper = document.querySelector('#paper');
const playerChoiceScissors = document.querySelector('#scissors');

const paraUserResult = document.querySelector('#userResult');
const paraComputerResult = document.querySelector('#computerResult');

let computerSelection = () => {
  let randomCount = Math.random();

  if (randomCount < 0.34) {
    paraComputerResult.textContent = 'Computer selects rock';
    return 'rock';
  } else if (randomCount > 0.34 && randomCount < 0.68) {
    paraComputerResult.textContent = 'Computer selects paper';
    return 'paper';
  } else {
    paraComputerResult.textContent = 'Computer selects scissors';
    return 'scissors';
  }
}



let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 'It is a tie';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'Computer wins!';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win!';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win!';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'Computer wins!';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win!';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You lose!';
  }
}


    playerChoiceRock.addEventListener('click', () => {
      paraUserResult.textContent = playRound('rock', computerSelection());
      })

    playerChoicePaper.addEventListener('click', () => {
      paraUserResult.textContent = playRound('paper', computerSelection());
    })
   
    playerChoiceScissors.addEventListener('click', () => {
      paraUserResult.textContent = playRound('scissors', computerSelection());
    })


