const d = new Date(); // creates a new date object with the current date and time
console.log(d);

const d1 = new Date(2022, 07, 12, 02, 34, 0, 0); //creates a new date object with a specified date and time
console.log(d1);

console.log(d.toString());// converts a date to a string
console.log(d.toDateString()); // converts date into more readable form
console.log(d.toISOString()); // method converts a Date object to a string, using the ISO standard format
console.log(d.getFullYear()); //gets full year as a four digit
console.log(d.getMonth()); // returns month of a date as number (0-11)
console.log(d.getHours()); // returns the hours of a date as a number (0-23)


