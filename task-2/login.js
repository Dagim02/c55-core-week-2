// Do not change the line below
import { errorMessage, successMessage } from './app.js';

let incorrectAttempts = 0;

function onLogin(username, password) {
  // Write your code here.
  // Use the variables 'username' and 'password' to access the input values
  // Use incorrectAttempts to track the number of failed attempts

  // If login is already blocked
if (incorrectAttempts >= 4) {
    errorMessage("Login blocked: Too many incorrect attempts");
    return;
}
  // check valid users
 const isAdmin = username === "admin" && password === "Hack1234";
 const isUser = username === "user" && password === "7654321";

 if (isAdmin || isUser) {
    successMessage("Logged in successfully");
    incorrectAttempts = 0;
 }  else {
    incorrectAttempts++;

    if (incorrectAttempts >= 4) {
      errorMessage("Login blocked: Too many incorrect attempts");
    } else {
     errorMessage("Incorrect credentials");
    }
  }
}

// Do not change the line below
export { onLogin };
