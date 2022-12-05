import { INPUT } from './day-4-input.js'

const sanitizedInput = INPUT.split('\n')

let overlapPairs = 0;


// part 1
// for(let i = 0; i < sanitizedInput.length; i++){
// let [pair1, pair2] = sanitizedInput[i].split(',')
// let [lower1, upper1] = pair1.split('-')
// let [lower2, upper2] = pair2.split('-')

// if((parseInt(lower1) <= parseInt(lower2)) && (parseInt(upper1) >= parseInt(upper2))){
//   overlapPairs++;
// } else if((parseInt(lower2) <= parseInt(lower1)) && (parseInt(upper2) >= parseInt(upper1))){
//   overlapPairs++;
// }
// }

// console.log('there are ' + overlapPairs +' overlap pairs')

// part 2
for(let i = 0; i < sanitizedInput.length; i++){
  let [pair1, pair2] = sanitizedInput[i].split(',')
  let [lower1, upper1] = pair1.split('-')
  let [lower2, upper2] = pair2.split('-')



  if((parseInt(lower1) <= parseInt(lower2)) && (parseInt(upper1) >= parseInt(upper2))){
    // pair 2 is fully included within pair1
    overlapPairs++;
} else if((parseInt(lower2) <= parseInt(lower1)) && (parseInt(upper2) >= parseInt(upper1))){
    // pair 1 is fully included within pair2
    overlapPairs++;
} else if((parseInt(lower2) >= parseInt(lower1)) && (parseInt(lower2) <= parseInt(upper1))){
  // the lower bound of set 2 is included in set 1
  overlapPairs++
} else if((parseInt(lower1) >= parseInt(lower2)) && (parseInt(lower1) <= parseInt(upper2)))
  // the lower bound of set 1 is included in set 2
  overlapPairs++
}

console.log(overlapPairs + ' that overlap at all')