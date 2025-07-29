let yourPoint;
let isRollingPhase = false;

function comeOutRoll() {
    if (isRollingPhase){
        alert('You already have a point. Keep rolling.');
        return;
    }

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
        isRollingPhase = true;
    }
}

function rollDice() {
    if (!isRollingPhase){
        alert('You need to establish a point first.');
        return;
    }

    let roll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    if (roll === 7) {
        alert(`You rolled a ${roll}, you crapped out`);
        isRollingPhase = false;
        return;
    } else if (roll != yourPoint) {
        alert(`You rolled a ${roll}, roll again.`);
    } else {
        alert(`you rolled ${yourPoint}, you win!`);
        isRollingPhase = false;
        return;
    }
}