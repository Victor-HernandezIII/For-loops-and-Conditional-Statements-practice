// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
let clientLetter = [];
    for(let i = 0; i < array.length; i++){
        for(let b = 0; b < array[i].name.length; b++){
          if((array[i].name[b] === letter.toLocaleLowerCase()) || (array[i].name[b] === letter.toLocaleUpperCase()) ){
            clientLetter.push(array[i].name);
            }
        }
    }
    return clientLetter;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
