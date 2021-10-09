// import functions and grab DOM elements
//const selector = document.querySelector('input[type=radio]:checked')
//const rockShoot = document.getElementById('rock')
//const paperShoot = document.getElementById('paper')

import { getRandomNumber, didPlayerWin } from "./utils.js"

//const scissorsShoot = document.getElementById('scissors')
const playButton = document.getElementById('playButton')
const winCounter = document.getElementById('wincount');
const lossCounter = document.getElementById('losscount');
const tieCounter = document.getElementById('ties');


// initialize global state
let wins = 0;
let loses = 0;
let ties = 0;


// set event listeners 

playButton.addEventListener('click', ()=>{
  const userThrow = document.querySelector('input[type=radio]:checked')
  const playerChoice = userThrow.value; 
  const computerChoice = getRandomNumber();

  if (playerChoice === computerChoice){
      ties++;
  } else if (didPlayerWin(playerChoice, computerChoice) === 'wins'){
      wins++;
  } else {
      loses++;  
  } ;
  winCounter.textContent = wins;
  lossCounter.textContent = loses;
  tieCounter.textContent = ties;
})
  

    
  

    


 ///function play(userChoice, cpuChoice){
  //if(userChoice === 'rock' && cpuChoice === 'scissor')
//}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



// line 13 gets me the user selection aka what the user picked
// compare selector my random function

  