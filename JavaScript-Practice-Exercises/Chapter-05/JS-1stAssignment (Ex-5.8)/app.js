let outputStringContinue = "";


const numberToSkip = 7;
 10
for (let i = 1; i <= 10; i++) {
    if (i === numberToSkip) {
        continue;
    }

    outputStringContinue += i;
}