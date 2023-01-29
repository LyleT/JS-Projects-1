Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
let userName = 'Gillian';
userName ? console.log(`Hello ${userName}`) : console.log(`Hello!`);

const userQuestion = "Should we move to Victoria?";

console.log(`You asked, "${userQuestion}", ${userName}?`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if (randomNumber === 0) {
 eightball = 'It is certain';
} else if (randomNumber === 1) {
  eightball = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightball = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightball = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightball = 'Do not count on it';
} else if (randomNumber === 5) {
  eightball = 'My sources say no';
} else if (randomNumber === 6) {
  eightball = 'Outlook not so good';
} else  {
  eightball = 'Signs point to yes';
}
console.log(eightball);
