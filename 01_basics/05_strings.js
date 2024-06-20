/**
 * String useful functions:
 * string concate - not recommended to use + 
 * use string interpolation instead with ``
 * chatAt(2), indexOf('J'), substring(0,4), slice(-8,4),
 * trim(), replace()
 */

const fname = 'Jereemi';
const lname = 'Bentham';

console.log(`Hi my name is ${fname} ${lname}`);

//some useful functions of strings
const name = new String('Jereemi');

//check character at certain position
console.log(name.charAt(2)); // returns r

//check character's position
console.log(name.indexOf('r')); //returns 2