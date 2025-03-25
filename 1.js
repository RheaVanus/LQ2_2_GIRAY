/*
1. Using a CONDITIONAL Statement, Alert() and Prompt()
   The program must ask the following: user_password and user_name
   Check if user_password matches the var password
      ifTRUE => Print using alert() `Welcome ${user_name}`
      ifFALSE => Print using alert() `Maybe Username or Password is Invalid or Does not Match`
*/

var password = "Nikolet";
let user_name = prompt("Please enter your username: ");
let user_pass = prompt ("Please enter your password:");

if (user_pass === password){
    alert (`Welcome ${user_name}`);
}else {
    alert(`Maybe Username or Password is Invalid or Does not Match`)
}