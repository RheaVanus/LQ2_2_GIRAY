/*
Using a LOOP STATEMENT and prompt()
   The program must ask dog_breed and the print_count
   Print via Console the dog_breed multiple times based on print_count

*/

let dog_breed = prompt("Enter a dog breed:");
let numOfIteration = parseInt(prompt("Enter the number of loops:"));

for (let i = 0 ; i < numOfIteration; i++){
    console.log(dog_breed)
}
