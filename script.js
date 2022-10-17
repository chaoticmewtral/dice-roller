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
    showDieRolled();
    showResult();
}

function showDieRolled() {
    const txtDie = document.createElement('p');
    txtDie.textContent = dNum;
    dieRolled.appendChild(txtDie);
}

function showResult() {
    const txtRes = document.createElement('p');
    txtRes.textContent = dResult;
    result.appendChild(txtRes);
}