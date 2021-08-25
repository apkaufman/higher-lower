let valid_input = false;
let maxNum = 0;

while(!valid_input) {
    let input = window.prompt("What should the maximum number be?");

    maxNum = Number(input);

    if (!Number.isInteger(maxNum))
    {
        alert("That's not an integer. Try again.");
    }
    else if (Number.isNaN(maxNum))
    {
        alert("That's not a number. Try again.");
    }
    else if (maxNum <= 0)
    {
        alert("Your number has to be positive. Try again.");
    }
    else if(maxNum != NaN && maxNum > 0) {
        valid_input = true;
    }    
}

let range_message = document.getElementById("range_message");
range_message.innerHTML = "Try to match a number between 1 and " + maxNum + ".";

let numToMatch = Math.floor(Math.random() * maxNum) + 1;

let guessList = new Array(0);

function guess()
{
    let guess = Number(document.getElementById("guess_box").value);

    let message = document.getElementById("message");
    
    if (Number.isNaN(guess) || !Number.isInteger(guess))
    {
        message.innerHTML = "That's not an integer. Try again.";
    }
    else if (guess <= 0 || guess > maxNum)
    {
        message.innerHTML = "Your number has to be positive and within the guessing range. Try again.";
    }
    else if (!guessList.includes(guess))
    {
        guessList.push(guess);
        if (guess == numToMatch)
        {
            if (guessList.length == 1)
            {
                message.innerHTML = "<strong>You guessed correctly!</strong> It took you one guess. Your guess was: "+  guessList.toString() + ".";
            }
            else
            {
                message.innerHTML = "<strong>You guessed correctly!</strong> It took you " + guessList.length + " guesses. Your guesses were: " + guessList.toString() + ".";
            }
        }
        else if (guess > numToMatch)
        {
            message.innerHTML = "Guess was too high. Try a lower number.";
        }
        else
        {
            message.innerHTML = "Guess was too low. Try a higher number.";
        }
    }
    else
    {
        message.innerHTML = "You already guessed " + guess + ". Try another number."
    }
}