let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
let turns = 0;
function getPlayer(turn){
    if(turn % 2 == 0){
        nextPlayer = 'O';
    }
    else{
        nextPlayer = 'X';
    }
    return nextPlayer;
}
function printPlayerTurn(){
    var newText = document.getElementById('next-lbl');
    newText.innerHTML = nextPlayer;
}
printPlayerTurn();


//initialize the game
// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    let cells = document.querySelectorAll('td');
    for(let c = 0; c < cells.length; c++){
        cells[c].innerHTML = '<button>[]</button>';
    }
    
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');

for (let i=0; i<btns.length; i++)
{
    
    btns[i].addEventListener('click', (event) => { takeCell(event)});
    console.log(i);
    
}


// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    turns = turns+1;
    printPlayerTurn(getPlayer(turns));
    
    let clickedButton = event.target;
    clickedButton.innerText = nextPlayer;
    clickedButton.disabled = true;
    

    
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        var gameOverText = document.getElementById('game-over-lbl');
        gameOverText.innerText = 'Game Over';
        var moreText = document.getElementById('next-lbl');
        moreText.innerText = 'Board is full';

        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    for(let i = 0; i < btns.length; i++){
        if(!btns[i].disabled){
            return false;
        }
    }
    return true;
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
