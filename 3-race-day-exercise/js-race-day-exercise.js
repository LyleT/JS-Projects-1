let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
const registeredEarly = true;
const age = 25;


if (age < 18) {
  console.log(`Race Time: 12:30 pm. Race number: ${raceNumber}`);
} else if (age === 18) {
  console.log(`Please see the registration desk.`);
} else if (age > 18 && registeredEarly === false) {
    console.log(`Race Time: 11:00 am. Race number: ${raceNumber}`);
} else if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
  console.log(`Race Time: 9:30 am. Race number: ${raceNumber}`);
}