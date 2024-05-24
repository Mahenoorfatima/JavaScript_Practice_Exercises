var userAge = prompt("Please enter your age:");

var age = parseInt(userAge);

var message;

if (age >= 21) {
  message = "Confirm entry to the venue and the ability to purchase cigarette.";
} else if (age >= 19) {
  message = "Confirm entry to the venue but deny the purchase of cigarette.";
} else {
  message = "Deny entry.";
}

console.log(message);