// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']

import { bankAccounts } from "../data/data";

export function getClientWithNoMoney(array) {
  // Your code goes here...
let brokeClient = [];

for (let i = 0; i < array.length; i++) {
  if (array[i].balance === 0) {  
     brokeClient.push(array[i].name);  
  }  
}
return brokeClient;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
