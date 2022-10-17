// variables

// constants
const dice = document.querySelectorAll('button');

// event listeners
dice.forEach(die => die.addEventListener('click', () => rollTheDice(die.textContent)));

// functions
function rollTheDice(e) {
console.log(e);
}