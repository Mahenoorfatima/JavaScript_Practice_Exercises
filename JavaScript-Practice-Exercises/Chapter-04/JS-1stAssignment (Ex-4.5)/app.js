let prize = prompt("Set the value of the prize by selecting a number between 0 and 10:");

prize = parseInt(prize);

let outputMessage = "My Selection: ";

switch (prize) {
  case 0:
    outputMessage += "You win a small toy!";
    break;
  case 5:
    outputMessage += "Congratulations! You win a gift card.";
    break;
  case 10:
    outputMessage += "Wow! You win a grand prize!";
    break;
  default:
    outputMessage += "Sorry, no prize this time.";
};

console.log(outputMessage);
