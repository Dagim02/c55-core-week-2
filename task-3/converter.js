import promptSync from 'prompt-sync';
const prompt = promptSync();
// Exchange rate for EUR/USD (How much 1 EUR is in USD)
const EUR_USD_RATE = 1.1643;
// Menu display
// BUG 1 FIXED: "conole.log" was misspelled, corrected to console.log
console.log("Hello and welcome to the currency converter. Please choose:");
console.log("1: Convert EUR to USD");
console.log("2: Convert USD to EUR");
// FEATURE added to Option 3 for displaying exchange rate
console.log("3: Display the current exchange rate");
const menuSelection = prompt("Select your option [1, 2, or 3]:");
if (menuSelection === "1") {
  // EUR to USD
  console.log("");
  const eurAmountInput = prompt("Enter amount in EUR:");
  const eurAmountNum = Number(eurAmountInput);
  // BUG 3 FIXED: Condition was wrong (eurAmountNum > 0)
  if (Number.isNaN(eurAmountNum) || eurAmountNum < 0) {
    console.log("Please enter a valid positive number for the amount.");
  } else {
    const usdAmount = eurAmountNum * EUR_USD_RATE;
    console.log(eurAmountNum.toFixed(2) + ' EUR is equal to ' + usdAmount.toFixed(2) + ' USD.');
  }
} else if (menuSelection === "2") {
  // USD to EUR
  console.log("");
  const usdAmountInput = prompt("Enter amount in USD:");
  const usdAmountNum = Number(usdAmountInput);
  if (Number.isNaN(usdAmountNum) || usdAmountNum < 0) {
    console.log("Please enter a valid positive number for the amount.");
  } else {
    // BUG 2 FIXED: Wrong variable name (eur_usd_rate) now corrected to EUR_USD_RATE
    const eurAmount = usdAmountNum / EUR_USD_RATE;
         // BUG 2 Previously printed usdAmountNum twice
    console.log(usdAmountNum.toFixed(2) + ' USD is equal to ' + eurAmount.toFixed(2) + ' EUR.');
  }
} else if (menuSelection === "3") {
    // FEATURE added to Show exchange rate
    console.log("");
    console.log(`The current exchange rate is 1 EUR = ${EUR_USD_RATE} USD.`);
} else {
    console.log("Invalid selection. Please choose either 1, 2, or 3.");
}
