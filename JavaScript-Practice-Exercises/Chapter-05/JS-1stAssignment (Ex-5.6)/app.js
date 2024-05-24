const myArray = [];

for (let x = 0; x < 10; x++) {
    myArray.push(x);
}

console.log("Array:", myArray);

console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log("Using for of loop:");
for (const value of myArray) {
    console.log(value);
}
