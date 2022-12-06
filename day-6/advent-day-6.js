import { INPUT } from './day-6-input.js'

let sanitizedInput = INPUT.split('');

let packetStart = -1;

//part 1
// for(let i = 3; i < sanitizedInput.length; i++){
//   let prev1 = sanitizedInput[i-1]
//   let prev2 = sanitizedInput[i-2]
//   let prev3 = sanitizedInput[i-3]

//   let doPreviousMatch = (prev1 === prev2 || prev1 === prev3 || prev3 === prev2)
//   let current = sanitizedInput[i]

//   if(!doPreviousMatch && (current !== prev1 && current !== prev2 && current !== prev3)){
//    //only want the first instance where this is true
//     packetStart = (packetStart === -1)? i: packetStart;
//   }
// }

// console.log('packet starts at index: ' + packetStart)

for(let i = 14; i < sanitizedInput.length; i++){
  let temp = sanitizedInput.slice(i - 14, i)
  //convert to set, then back to array, and check if length is 14
  const set = new Set(temp);
  const newArr = [...set]

  if(newArr.length >= 14){
    packetStart = i
  }
}

console.log('the message starts at ' + packetStart)