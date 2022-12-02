import {INPUT} from './day-1-input.js'
let sanitizedInput = INPUT.split('\n')

//loop through sanitizedInput, add up until you reach an '', compare to current max

let max = 0;
let sums = []
let current = 0;

for(let i = 0; i < sanitizedInput.length; i++){
  let temp = parseInt(sanitizedInput[i])
  if(sanitizedInput[i] !== ''){
    current += temp
  }
  else{
    sums.push(current) //find all the sums to sort
    max = (current >= max)? current: max;
    current = 0;
  }
}

console.log("The max calories carried by a single elf is: " + max);
sums.sort((a,b) => b - a)
console.log("The top 3 calories carried are: " + sums[0] + ", " + sums[1] + ", " + sums[2])
console.log(sums[0] + sums[1] + sums[2])
