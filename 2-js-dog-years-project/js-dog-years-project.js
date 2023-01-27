// create a variable for your age
const myAge = 30;
// create a variable for the accelerated dog years portion
let earlyYears = 2;
earlyYears *= 10.5;
// subtract 2 from myAge to account for slower dog years potion
let laterYears = myAge - 2;
// multiply laterYears by 4
laterYears *= 4;
// create a variable myAgeInDogYears that sums the two years
myAgeInDogYears = earlyYears + laterYears;

// convert my name to lower case
let myName = 'Gillian Trethewey'.toLowerCase();
// use a template literal to log out the results
console.log(`My name is ${myName}. 
	I am ${myAge} years old in human years 
	which is ${myAgeInDogYears} years old in dog years.`)