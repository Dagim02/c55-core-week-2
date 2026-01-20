import promptSync from 'prompt-sync';
const prompt = promptSync();

// Step 1: prompt the user to enter a year
let input = prompt("Enter a year: ");

// Step 2: convert the user input to a number so we can perform calculations
let year = Number(input);

// Step 3: Implement the logic
if (isNaN(year) || year < 1 || year > 9999) {
    console.log("Invalid year!");
} else {
    if (year % 400 === 0) {
    console.log("Yes, " + year + " is a leap year");
    } else if (year % 100 === 0) {
    console.log("No, " + year + " is not a leap year");
    } else if (year % 4 === 0) { 
    console.log("Yes, " + year + " is a leap year");
    } else {
    console.log("No, " + year + " is not a leap year");
     }
} 