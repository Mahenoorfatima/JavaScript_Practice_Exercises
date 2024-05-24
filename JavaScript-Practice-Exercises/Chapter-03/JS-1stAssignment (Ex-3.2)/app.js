let shoppingList = [];

shoppingList.push("Milk", "Bread", "Apples");
console.log(shoppingList);

let breadIndex = shoppingList.indexOf("Bread");
shoppingList[breadIndex] = "Bananas";
shoppingList.push("Eggs");

let lastItem = shoppingList.pop();
console.log("Removed item:", lastItem);

shoppingList.sort();

let milkIndex = shoppingList.indexOf("Milk");
console.log("Index of Milk:", milkIndex);

let bananasIndex = shoppingList.indexOf("Bananas");
shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");

let additionalItems = ["Juice", "Pop"];

let combinedList = shoppingList.concat(additionalItems, additionalItems);

let popIndex = combinedList.lastIndexOf("Pop");
console.log("Last index of Pop:", popIndex);

console.log("Final Shopping List:", combinedList);