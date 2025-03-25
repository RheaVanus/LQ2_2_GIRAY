/*
3. Price Inquiry: Using SWITCH (Conditional Statement), alert(), and prompt()
   1. Print in the Console Log the List of Choices
      A. Pepsi Cola        Php 30.00
      B. Coca Cola         Php 35.00
      C. Apple (per kg)    Php 100.00
      D. Orange (per kg)   Php 120.00
      E. Hotdogs (per kg)  Php 180.00

   The Program must ask for their item_Choice with a Character only
   Then the program must ask for the QTY to be ordered
*/

let item_list = ["A. Pepsi Cola        Php 30.00",
        "B. Coca Cola         Php 35.00",
          "C. Apple (per kg)    Php 100.00",
          "D. Orange (per kg)   Php 120.00",
          "E. Hotdogs (per kg)  Php 180.00"
];
console.log (item_list)

let item;

let choice = prompt ("Choice an Item:");

switch(choice){
    case 'A':
        item = "Pepsi Cola        Php 30.00";
        console.log(item);
        break;
    case 'B':
        item = "Coca Cola         Php 35.00";
        console.log(item);
        break;
    case 'C':
        item = "Apple (per kg)    Php 100.00";
        console.log(item);
        break;
    case 'D':
        item = "Orange (per kg)   Php 120.00";
        console.log(item);
        break;
    case 'E':
        item = "Hotdogs (per kg)  Php 180.00";
        console.log(item);
        break;
    default:
        alert("Item does not exist");
        break;
}


let quantity = parseInt(prompt("Enter the Quatity:"));
alert (`You ordered ${item} with quantity of ${quantity}`);
