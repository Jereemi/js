/**
 * Dates:
 * Inside Date object - month starts with index 0
 * For applications where we need to compare the dates - use timestamps that returns the values in milli-secs
 */

const myDate = new Date();

console.log(typeof(myDate)); //object
console.log(myDate.toString()); //returns full datetime
console.log(myDate.toLocaleDateString()); //retuns system or the server's date format
console.log(myDate.toDateString()); //retuns Readable date format
console.log(myDate.toISOString());

const myCreatedDate = new Date(2024, 0, 28); // note here - 0 is the month representing January
console.log(myCreatedDate.toString());

//case: what if we use Date.now()
const myTimeStamp = Date.now();
console.log(myTimeStamp); // retuns the value in milli-seconds
