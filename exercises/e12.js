
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
let clientHundred = [];
let cleanerArray = [];

for (let i = 0; i < array.length; i++) {
  if (array[i].deposits != null) {
    cleanerArray.push(array[i].deposits);
  }
}
for (let i = 0; i < cleanerArray.length; i++) {
  for (let j = 0; j < cleanerArray[i].length; j++) {    
    if (cleanerArray[i][j] > 100) {
      clientHundred.push(cleanerArray[i][j]);
    }
  }
}
return clientHundred;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
