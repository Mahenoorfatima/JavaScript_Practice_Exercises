// Step 1: Create a variable for the max value
const maxValue = 5;

// Step 2: Generate a random number for the solution
const solution = Math.floor(Math.random() * maxValue) + 1;
console.log("Solution:", solution); // Comment out this line after development

// Step 3: Create a variable for tracking correctness
let isCorrect = false;

// Step 4: Use a while loop for user input
while (!isCorrect) {
    // Step 5: Prompt user to enter a number between 1 and maxValue
    const userGuessString = prompt(`Enter a number between 1 and ${maxValue}:`);
    const userGuess = parseInt(userGuessString);

    // Check if the guess is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > maxValue) {
        alert(`Please enter a valid number between 1 and ${maxValue}.`);
        continue; // Skip the rest of the loop and prompt again
    }

    // Check if the guess is correct
    if (userGuess === solution) {
        isCorrect = true;
        alert(`Congratulations! You guessed the correct number (${solution}).`);
    } else {
        // Provide feedback on whether the guess was high or low
        const feedback = userGuess < solution ? "Too low!" : "Too high!";
        alert(`Incorrect. ${feedback} Try again.`);
    }
}

// Game is complete
console.log("Game Over");
