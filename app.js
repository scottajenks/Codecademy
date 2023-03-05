// Set kelvin temp to 293
const kelvin = 274;
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
// Subtracts 273 from the kelvin temp to get the celsius temp
let celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees Celsius.`);
// Use formula to calculate celsius into fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Rounds fahrenheit down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Use formula to calculate celsius into newton
let newton = celsius * (33/100);
// Rounds newton down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);