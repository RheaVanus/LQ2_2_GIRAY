/*
Using a LOOP STATEMENT and prompt()
   The program must ask dog_breed and the print_count
   Print via Console the dog_breed multiple times based on print_count

*/

let dog_breed = prompt("Enter a dog breed:"); //prompts the user the name of the dog breed to be looped.
let numOfIteration = parseInt(prompt("Enter the number of loops:")); //prompts the user if how many times does he/she wants to repeat the namne

for (let i = 0 ; i < numOfIteration; i++){ //let iteration eqals to 0. The number of loops depends to the numOfIteration, as long as it is greater than 0. it will loop. i++ for safety loop.
    console.log(dog_breed)//logged the dog_breed name along with the loop.
}
