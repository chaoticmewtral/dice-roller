// variables

// constants
const dice = document.querySelectorAll('button');


// event listeners
dice.forEach(die => die.addEventListener('click', () => rollTheDice(die.textContent)));

// functions
function rollTheDice(e) {
    num = parseInt(e.slice(1));
    roll = Math.ceil(Math.random() * num);
    showResult(`${e}: ${roll}`);
}

function showResult(e) {
    console.log(e);
}