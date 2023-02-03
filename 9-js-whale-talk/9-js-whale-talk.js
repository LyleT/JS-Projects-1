/*
Take a phrase like ‘turpentine and turtles’ 
and translate it into its “whale talk” equivalent: 
‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to 
whale language:

1. There are no consonants. Only vowels excluding “y”.
2. The u‘s and e‘s are extra long, so we must double them 
in our program.

*/

const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      if (input[i] === "u" || input[i] === "e") {
      resultArray.push(input[i]);
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());
