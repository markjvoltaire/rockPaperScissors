// import functions and grab DOM elements
//const selector = document.querySelector('input[type=radio]:checked')
//const rockShoot = document.getElementById('rock')
//const paperShoot = document.getElementById('paper')

import { getRandomNumber } from "./utils.js"

//const scissorsShoot = document.getElementById('scissors')
const playButton = document.getElementById('playButton')
const myPick = document.getElementById('myPick')
const cpuPick= document.getElementById('cpuPick')
const gamePick = document.getElementById('gamePick')



// initialize global state
let wins = 0;
let loses = 0;
let draws = 0;


// set event listeners 

playButton.addEventListener('click', ()=>{
  const userThrow = document.querySelector('input[type=radio]:checked').value
  console.log(userThrow)
  


  
  
  

  

})
    
  

    


 ///function play(userChoice, cpuChoice){
  //if(userChoice === 'rock' && cpuChoice === 'scissor')
//}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



// line 13 gets me the user selection aka what the user picked
// compare selector my random function

  