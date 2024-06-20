/**
 * Stack & Heap
 * Primitive types are stored in Stacks (string, number, symbol, boolean, null, undefined)
 * Non-primitive types are stored in Heaps (objects)
 */

//For primitive types - a copy is maintained instead of the original reference
//all the variables are stored inside stack

let gmailName = "jer@gmail.com"
let newGmail = gmailName;
console.table([gmailName, newGmail]); //both will have the same values

//but when you give another value to newGmail the old value of gmailName will not change
newGmail = "test@gmail.com";
console.table([gmailName, newGmail]); //both diff values

//For non-primitive types - values are stored in the heap and the reference is stored in the stack
//the values of them are stored in heap

let obj = {
    email: "abc@gmail.com",
    name: "abc"
} //obj variable is stord in the stack and its respective values are stored in the heap
console.log(obj);

let newObj = obj; //now both the variable points to the same reference values
newObj.email = "test@gmail.com";
console.log(obj.email + " -- " + newObj.email); //value is changed only for the second variable but since its value is stored
//in the same reference -- both values will be same
