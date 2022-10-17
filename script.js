// variables
let dNum;
let dResult;

// constants
const dice = document.querySelectorAll('button');
const dieRolled = document.querySelector('#die-rolled');
const result = document.querySelector('#result');

// event listeners
dice.forEach(die => die.addEventListener('click', () => rollTheDice(die.textContent)));

// functions
function rollTheDice(e) {
    dNum = e;
    let num = parseInt(e.slice(1));
    dResult = Math.ceil(Math.random() * num);
    let msg = `You rolled a ${dResult} on a ${dNum}.`
    showResult(msg);
}

function showResult(e) {
    const txtRes = document.createElement('p');
    txtRes.textContent = e;
    result.appendChild(txtRes);
}