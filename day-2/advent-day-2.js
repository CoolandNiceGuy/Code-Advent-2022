import { INPUT } from "./day-2-input.js"

const WIN_VALUES = {
  'A': 'Y',
  'B': 'Z',
  'C': 'X'
}

const SCORE_VALUES = {
  'X': 1,
  'Y': 2,
  'Z': 3
}

const TIE_VALUES = {
  'A': 'X',
  'B': 'Y',
  'C': 'Z'
}

const LOSS_VALUES = {
  'A': 'Z',
  'B': 'X',
  'C': 'Y'
}

let formattedInput = INPUT.split('\n')
let totalScore = 0;

//X means lose, Y means tie, Z means win

for(let i = 0; i < formattedInput.length; i++){
  let [opponentChoice, outcome] = formattedInput[i].split(' ')
  let myChoice;

  if(outcome === 'Z'){
    myChoice = WIN_VALUES[opponentChoice]
  } else if(outcome === 'Y'){
    myChoice = TIE_VALUES[opponentChoice]
  } else{
    myChoice = LOSS_VALUES[opponentChoice]
  }

  totalScore += SCORE_VALUES[myChoice]
  totalScore += (WIN_VALUES[opponentChoice] === myChoice)?6:0; // +6 points if you win
  totalScore += (TIE_VALUES[opponentChoice] === myChoice)?3:0; // +3 points if you tie
}

console.log(totalScore)