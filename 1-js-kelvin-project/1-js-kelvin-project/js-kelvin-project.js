
   
// set temp in kelvin to 293 degrees
const kelvin = 293;
// convert kelvin to celsius by subtracting 273
const celsius = kelvin - 273;
// convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// round fahrenheit to integer
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton`);