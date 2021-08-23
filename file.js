// Declare global variables
let humanScore = 0;
let computerScore = 0;
let humanScoreLabel = document.getElementById('human-score');
let computerScoreLabel = document.getElementById('computer-score');
const buttons = document.querySelectorAll('input');
const myArray = ['rock', 'paper', 'scissors'];


// Randomly selects computer pick
const computerPlay = () => {
  const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
  return randomElement;
  // console.log(randomElement);
}

// Game logic
let playRound = (playerSelection) => {
  if(playerSelection == 'rock' && computerPlay() == 'rock'){
    console.log('tie');
  } else if (playerSelection == 'rock' && computerPlay() == 'paper'){
    console.log(`Computer wins test`);
    computerScore++;
    computerScoreLabel.innerHTML = computerScore;
  } else if (playerSelection == 'rock' && computerPlay() == 'scissors') {
    console.log(`Human wins`);
    humanScore++;
    humanScoreLabel.innerHTML = humanScore;
  } else if (playerSelection == 'paper' && computerPlay() == 'paper') {
    console.log('tie');
  } else if (playerSelection == 'paper' && computerPlay() == 'scissors') {
    console.log(`Computer wins`);
    computerScore++;
    computerScoreLabel.innerHTML = computerScore;
  } else if (playerSelection == 'paper' && computerPlay() == 'rock') {
    console.log(`Human wins`);
    humanScore++;
    humanScoreLabel.innerHTML = humanScore;
  } else if (playerSelection == 'scissors' && computerPlay() == 'scissors') {
    console.log('tie');
  } else if (playerSelection == 'scissors' && computerPlay() == 'rock') {
    console.log(`Computer wins`);
    computerScore++;
    computerScoreLabel.innerHTML = computerScore;
  } else if (playerSelection == 'scissors' && computerPlay() == 'paper') {
    console.log(`Human wins`);
    humanScore++;
    humanScoreLabel.innerHTML = humanScore;
  }
  // declare winner of the best of 5
  // if human gets to 5 first
  if(humanScore == 5){
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'HUMAN WINS!';

    // Appends text
    humanScoreLabel.appendChild(content)
    // disables buttons
    buttons.forEach(button => {
      button.disabled = true;
    })
    // if computer gets to 5 first
  } else if (computerScore == 5){
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'COMPUTER WINS!';

    // appends text
    computerScoreLabel.appendChild(content);
    // disables buttons
    buttons.forEach(button => {
      button.disabled = true;
    })
  }
}

// iterates through the buttons
buttons.forEach(button => {
  button.addEventListener('click',() => {
    // console.log(button.value)
    playRound(button.value)
  })
})
