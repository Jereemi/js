/**
 * Summary of datatypes
 * Primitive & non-primitive types
 * null -- typeof(null) is an object
 */

"use strict"; //indicates that this js file will use the latest javascript version available
//Primitive types

let name = "jereemi" //string
let age = 40 //number 
//bigint -- especially used in stock market where large numbers are required
let isMarried = false //boolean
let temp = null //null -- this is a standalone value
let state; //undefined
//symbol -- uniqueness (will have more uses with components in react or other js frameworks)

//Non-Primitive types
//object

//if you want to check the type of any variable
console.log(typeof(temp)); //object
console.log(typeof(state)); //undefined