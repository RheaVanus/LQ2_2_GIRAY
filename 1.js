/*
1. Using a CONDITIONAL Statement, Alert() and Prompt()
   The program must ask the following: user_password and user_name
   Check if user_password matches the var password
      ifTRUE => Print using alert() `Welcome ${user_name}`
      ifFALSE => Print using alert() `Maybe Username or Password is Invalid or Does not Match`
*/

var password = "Nikolet"; // The set password, declared in a var
let user_name = prompt("Please enter your username: "); // prompts or asks the user to input username
let user_pass = prompt ("Please enter your password:");// prompts or asks the user to input the required pass word

if (user_pass === password){
    alert (`Welcome ${user_name}`); //Checks if the user input of password matched to the fixed password set
}else {
    alert(`Maybe Username or Password is Invalid or Does not Match`) // This message will pop up if the password is wrong
}