const computerDisplay = document.getElementById('computer-choice')
const userDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button')

let userChoice
let compuertChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    userDisplay.innerHTML = userChoice
    generateComputerChice()
    generateResult();
}))

function generateComputerChice(){
    const random = Math.floor(Math.random() * possibleChoices.length) + 1;
    if(random === 1){
        compuertChoice = "rock"
    }
    if(random === 2){
        compuertChoice = "paper"
    }
    if(random === 3){
        compuertChoice = "scissors"
    }
    computerDisplay.innerHTML = compuertChoice
}

function generateResult(){
    switch(true){
        case ((compuertChoice === "rock" && userChoice === "scissors") || (compuertChoice === "scissors" && userChoice === "paper") || (compuertChoice === "paper" && userChoice === "rock")):
            result = "you lose!"
            break;
        case(compuertChoice === userChoice):
            result = "Its a draw" 
            break;
        default:
            result = "You win!"       
    }
    resultDisplay.innerHTML = result;
}