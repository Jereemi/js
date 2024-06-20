/**
 * Summary of Numbers and Maths
 * toFixed(2) - precision value to 2 digits
 * toPrecision(3) - check its difference with the above for interviews
 * toLocaleString('en-IN') - converting number to readable format in Indian System
 * 
 * Maths:
 * ceil(), floor(), round(), min(), max() 
 * random() - the value is between 0 - 1
 * 
 */

// const balance = new Number(100);
// console.log(balance.toFixed(2)); //100.00

// const hundreds = 100000;
// console.log(hundreds.toLocaleString()); //100,000 - by default its international system
// console.log(hundreds.toLocaleString('en-IN')); //1,00,000

console.log(Math.min(1,4,5,2,0)); //0
console.log(Math.random()); //gives any random number between 0 and 1

//case: when you want the random number to be generated between min and max value
const min = 10;
const max = 20;

//formula - Math.random() * (max - min + 1) + min
console.log(Math.random() * (max - min + 1) + min); // any no between min and max
