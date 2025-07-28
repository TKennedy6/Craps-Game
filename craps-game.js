let yourPoint;

function comeOutRoll() {
    let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    alert(`You rolled a ${roll}`);
    if ((roll === 2) || (roll === 3) || (roll === 12)) {
        alert('You crapped out, try again.');
        return;
    } else if ((roll === 7) || (roll === 11)) {
        alert(`You Win!`);
        return;
    } 
    else {
        yourPoint = roll;
    }
}

function rollDice() {
    let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    if (roll === 7) {
        alert(`You rolled a ${roll}, you crapped out`);
        return;
    } else if (roll != yourPoint) {
        alert(`You rolled a ${roll}, roll again.`);
    } else {
        alert(`you rolled ${yourPoint}, you win!`);
        return;
    }
}