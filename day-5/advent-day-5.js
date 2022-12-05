import { CRATE_ARR, MOVES } from "./day-5-input.js";

let crates = CRATE_ARR

const regex = /\d+/g
const sanitizedInput = MOVES.split('\n')

const helper = (amount, from, to) => {
  let temp = crates[from - 1].slice(0, amount);
  // temp.reverse(); //replicate order of placing crates 1 by 1
  let curr = crates[to - 1]
  crates[from - 1].splice(0,amount)
  crates[to - 1] = [...temp, ...curr]
}

//iterate through moves, use helper function to perform changes
for(let i = 0; i < sanitizedInput.length; i++){
  let [amount, from, to] = sanitizedInput[i].match(regex)
  helper(amount, from, to)
}

for(let i = 0; i < crates.length; i++){
  console.log(crates[i][0])
}