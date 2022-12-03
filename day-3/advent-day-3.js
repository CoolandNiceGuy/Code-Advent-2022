import {INPUT, LOWERCASE_VALUES} from './day-3-input.js'

const sanitizedInput = INPUT.split('\n')

// console.log(sanitizedInput)
const repeatedElements = []

//part 1
// for(let i = 0; i < sanitizedInput.length; i++){
//   let entry = sanitizedInput[i].split('')
//   // console.log(entry)
//   //split entry in half
//   let first = entry.slice(0,(entry.length / 2))
//   let second  = entry.slice((entry.length / 2), entry.length);

//   // console.log(first)
//   // console.log(second)

//   //find intersection
//   let intersection = first.filter(x => second.includes(x));
//   intersection = [... new Set(...intersection)]
//   repeatedElements.push(...intersection)
// }

//part 2
for(let i = 0; i < sanitizedInput.length; i+=3){
  let current1 = sanitizedInput[i].split('')
  let current2 = sanitizedInput[i + 1].split('')
  let current3 = sanitizedInput[i + 2].split('')

  //find intersection
  let intersection = current1.filter(x => (current2.includes(x) && current3.includes(x)))
  intersection = [... new Set(...intersection)]
  repeatedElements.push(...intersection)
}

let prioritySum = 0;
for(let i = 0; i < repeatedElements.length; i++){
  if(LOWERCASE_VALUES[repeatedElements[i]]){
    prioritySum += LOWERCASE_VALUES[repeatedElements[i]]
  } else {
    let lower = repeatedElements[i].toLowerCase()
    prioritySum += (LOWERCASE_VALUES[lower] + 26)
  }
}

console.log('prioritySum: ' + prioritySum)