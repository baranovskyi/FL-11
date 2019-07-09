let start = confirm('Do you want to play a game?');
let attempts = 3;
let continueGame = true;
let possiblePrize = 100;
let maxNumber = 8;
let userPrize = 0;
let guessedNumber;
let two = 2;
let three = 3;
let four = 4;
if(start === false) {
    alert('You did not become a billionaire, but can.');
} else {
    while(start) {
        while (continueGame) {
            let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
            for (let i = 1; i < attempts + 1; i++) {
                let enteredNumber = Number(prompt(
                    `Choose a roulette pocket number from 0 to ${maxNumber}.
                         Attempts left:  ${attempts - i + 1}
                         Total prize: ${userPrize}$
                         Possible prize on current attempt: ${possiblePrize / Math.pow(two, i - 1)}$`));
                if (enteredNumber > maxNumber || enteredNumber < 0 || isNaN(enteredNumber)){
                    alert('Chosen a roulette pocket number is out of range or incorrect.' +
                        ' You\'ve lost an attempt.')
                } else if (randomNumber === enteredNumber) {
                    userPrize += possiblePrize / Math.pow(two, i - 1);
                    break;
                } else {
                    if (i === three) {
                        guessedNumber = true;
                        break;
                    }
                }
            }
if (guessedNumber) {
    break;
}
            continueGame = confirm(`Congratulation, you won! Your prize is: ${userPrize}$. 
                Do you want to continue?`);
            if (continueGame) {
                maxNumber += four;
                possiblePrize *= two;
            } else {
                break;
            }
        }
        alert(`Thank you for your participation. Your prize is: ${userPrize}$`);
        start = confirm('Do you want to play again?');
    }
}


