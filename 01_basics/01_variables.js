/**
 * Summary of const, let and var
 * const value cant be changed once defined
 * var has issues with block and functional scope
 * if any variable is only declared then in js its value is undefined
*/

const accountId = 12345
let accountCity = "Jaipur"
var accountEmail = "test@gmail.com"
accountCity = "Bengaluru" 

//accountId = 435; // not allowed as the variable is const
console.log(accountId);

//diff between let and var -- var has an issue with block and functional scope
//so preferable to use let

let accountState; //the value of this variable will be undefined
console.table([accountId, accountCity, accountEmail, accountState]);