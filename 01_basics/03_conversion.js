/**
 * Conversions
 * 
 */

let score = 33;
console.log(typeof(score)); //number

let newScore = "33"
console.log(typeof(newScore)); //string

//Case 1: NaN as output when value is string or undefined
let value = "33abc"
let newValue = Number(value)
console.log(typeof(newValue)); //number**
console.log(newValue); //NaN

//Case 2: 0 as output when the value is null
let num = null;
let newNum = Number(num);
console.log(typeof(newNum)); //number
console.log(newNum); //0

//Case 3: 0 or 1 as output depending on the boolean value -- true:1 & false:0

//Case 1: false when the string is empty
let login = ""
let newLogin = Boolean(login);
console.log(typeof(newLogin)); //boolean
console.log(newLogin); //false

//Case 2: true when the string contains some values