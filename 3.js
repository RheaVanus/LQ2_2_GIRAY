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
]; //List of the items. Square brackets indicates that it is a list.
console.log (item_list) //Log the list


let choice = prompt ("Choice an Item:"); //prompt a user to choose an item

switch(choice){ //Switch statement whihc have 5 cases and those are case 'A', 'B', 'C', 'D', 'E', with a default case "Items do not exist."
    case 'A': // If 'A' was entered in choice, theh item = "Pepsi Cola  Php 30.00" will be accessed by the alert later
        item = "Pepsi Cola        Php 30.00";
        console.log(item);
        break;
    case 'B': //If 'B. was entered in choice, then item = "Coca Cola  Php 35.00" will be accessed by the alert later.
        item = "Coca Cola         Php 35.00";
        console.log(item);
        break;
    case 'C': //If 'C' was entered in choice, then item = "Apple(per kg)    Php 100.00" will be accessed by the alert later.
        item = "Apple (per kg)    Php 100.00";
        console.log(item);
        break;
    case 'D': // If 'D' was chosen then item = "Orange (per kg)  Php 120.00"; will be accessed by the alert later.
        item = "Orange (per kg)   Php 120.00";
        console.log(item);
        break;
    case 'E': // If 'E' was chosen then item = "Hotdogs (per kg)   Php 180.00"; will be accessed by the alert later
        item = "Hotdogs (per kg)  Php 180.00";
        console.log(item);
        break;
    default:
        alert("Item does not exist"); //Error handler if the choses letter is not on the cases.
        break;
}


let quantity = parseInt(prompt("Enter the Quatity:")); //prompts the user the quantity of ordered items, transforming the value from string to int using parseInt
alert (`You ordered ${item} with quantity of ${quantity}`);//alerts after 'You ordered {item choice} with quantitiy of {the quantity chosen}.
