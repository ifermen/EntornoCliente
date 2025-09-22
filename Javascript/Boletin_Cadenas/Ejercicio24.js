
let list = ["Milk","Rice","Tomatoes"];

let shoppingList = "";

for (i = 0; i < list.length; i++) {
  shoppingList += `- ${list[i]}\n`;
} 

console.log(`Shopping List:\n${shoppingList}`);