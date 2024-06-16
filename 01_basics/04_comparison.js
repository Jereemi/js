/**
 * comparison converts null to a number -- 0
 * but for undefined values it cannot be compared
 */

console.log(null > 0); //false
console.log(null >= 0); //true -- as the null is converted to 0

console.log(undefined > 0); //false
console.log(undefined >= 0); //false

// === also known as strict check: checks both the types and the values
console.log("2" === 2); //false


