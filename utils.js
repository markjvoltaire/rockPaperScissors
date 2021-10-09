export function getRandomNumber() {
   return ['rock', 'paper', 'scissors'] [(Math.floor(Math.random() * 3))];

}

export function didPlayerWin(playerChoice, computerChoice){
   if (playerChoice === computerChoice) {
      return 'ties';
   } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
      return 'loses';
   }  else if (playerChoice === 'scissors' && computerChoice === 'rock') {
      return 'loses'
   } else if (playerChoice === 'rock' && computerChoice === 'paper') {
      return 'loses'
   } else if (playerChoice === 'paper' && computerChoice === 'rock') {
      return 'wins';
   }  else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      return 'wins'
   } else if (playerChoice === 'rock' && computerChoice === 'scissors' ){
      return 'wins'
   }
}

//if(userChoice === 'rock' && cpuChoice === 'scissor'){
   //  return 'you win'
  // }

