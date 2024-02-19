const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");
const square5 = document.getElementById("square5");
const square6 = document.getElementById("square6");
const square7 = document.getElementById("square7");
const square8 = document.getElementById("square8");
const square9 = document.getElementById("square9");

let playerTurn = "x";
let squareSelected1 = "";
let squareSelected2 = "";
let squareSelected3 = "";
let squareSelected4 = "";
let squareSelected5 = "";
let squareSelected6 = "";
let squareSelected7 = "";
let squareSelected8 = "";
let squareSelected9 = "";

square1.addEventListener("click", event =>{
    if(event.target.textContent == ""){
        if(playerTurn === "x"){
            event.target.textContent = "X";
            squareSelected1 = "x";
            if(squareSelected2 == "x" && squareSelected3 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected5 == "x" && squareSelected9 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected4 == "x" && squareSelected7 == "x"){
                alert("Player X Wins!");
                reset();
            }
            playerTurn = "o";
        }
        else{
            event.target.textContent = "O";
            squareSelected1 = "o";
            if(squareSelected2 == "o" && squareSelected3 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected5 == "o" && squareSelected9 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected4 == "x" && squareSelected7 == "x"){
                alert("Player O Wins!");
                reset();
            }
            playerTurn = "x";
        }
    }
});
square2.addEventListener("click", event =>{
    if(event.target.textContent == ""){
        if(playerTurn === "x"){
            event.target.textContent = "X";
            squareSelected2 = "x";
            if(squareSelected1 == "x" && squareSelected3 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected5 == "x" && squareSelected8 == "x"){
                alert("Player X Wins!");
                reset();
            }
            playerTurn = "o";
        }
        else{
            event.target.textContent = "O";
            squareSelected2 = "o";
            if(squareSelected1 == "o" && squareSelected3 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected5 == "o" && squareSelected8 == "o"){
                alert("Player O Wins!");
                reset();
            }
            playerTurn = "x";
        }
    }
});
square3.addEventListener("click", event =>{
    if(event.target.textContent == ""){
        if(playerTurn === "x"){
            event.target.textContent = "X";
            squareSelected3 = "x";
            if(squareSelected1 == "x" && squareSelected2 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected6 == "x" && squareSelected9 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected5 == "x" && squareSelected7 == "x"){
                alert("Player X Wins!");
                reset();
            }
            playerTurn = "o";
        }
        else{
            event.target.textContent = "O";
            squareSelected3 = "o";
            if(squareSelected1 == "o" && squareSelected2 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected6 == "o" && squareSelected9 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected5 == "x" && squareSelected7 == "x"){
                alert("Player O Wins!");
                reset();
            }
            playerTurn = "x";
        }
    }
});
square4.addEventListener("click", event =>{
    if(event.target.textContent == ""){
        if(playerTurn === "x"){
            event.target.textContent = "X";
            squareSelected4 = "x";
            if(squareSelected1 == "x" && squareSelected7 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected5 == "x" && squareSelected6 == "x"){
                alert("Player X Wins!");
                reset();
            }
            playerTurn = "o";
        }
        else{
            event.target.textContent = "O";
            squareSelected4 = "o";
            if(squareSelected1 == "o" && squareSelected7 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected5 == "o" && squareSelected6 == "o"){
                alert("Player O Wins!");
                reset();
            }
            playerTurn = "x";
        }
    }
});
square5.addEventListener("click", event =>{
    if(event.target.textContent == ""){
        if(playerTurn === "x"){
            event.target.textContent = "X";
            squareSelected5 = "x";
            if(squareSelected1 == "x" && squareSelected9 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected3 == "x" && squareSelected7 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected2 == "x" && squareSelected8 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected4 == "x" && squareSelected6 == "x"){
                alert("Player X Wins!");
                reset();
            }
            playerTurn = "o";
        }
        else{
            event.target.textContent = "O";
            squareSelected5 = "o";
            if(squareSelected1 == "o" && squareSelected9 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected3 == "o" && squareSelected7 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected2 == "o" && squareSelected8 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected4 == "o" && squareSelected6 == "o"){
                alert("Player O Wins!");
                reset();
            }
            playerTurn = "x";
        }
    }
});
square6.addEventListener("click", event =>{
    if(event.target.textContent == ""){
        if(playerTurn === "x"){
            event.target.textContent = "X";
            squareSelected6 = "x";
            if(squareSelected4 == "x" && squareSelected5 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected3 == "x" && squareSelected9 == "x"){
                alert("Player X Wins!");
                reset();
            }
            playerTurn = "o";
        }
        else{
            event.target.textContent = "O";
            squareSelected6 = "o";
            if(squareSelected4 == "o" && squareSelected5 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected3 == "o" && squareSelected9 == "o"){
                alert("Player O Wins!");
                reset();
            }
            playerTurn = "x";
        }
    }
});
square7.addEventListener("click", event =>{
    if(event.target.textContent == ""){
        if(playerTurn === "x"){
            event.target.textContent = "X";
            squareSelected7 = "x";
            if(squareSelected1 == "x" && squareSelected4 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected8 == "x" && squareSelected9 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected5 == "x" && squareSelected3 == "x"){
                alert("Player X Wins!");
                reset();
            }
            playerTurn = "o";
        }
        else{
            event.target.textContent = "O";
            squareSelected7 = "o";
            if(squareSelected1 == "o" && squareSelected4 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected8 == "o" && squareSelected9 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected5 == "x" && squareSelected3 == "x"){
                alert("Player O Wins!");
                reset();
            }
            playerTurn = "x";
        }
    }
});
square8.addEventListener("click", event =>{
    if(event.target.textContent == ""){
        if(playerTurn === "x"){
            event.target.textContent = "X";
            squareSelected8 = "x";
            if(squareSelected2 == "x" && squareSelected5 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected7 == "x" && squareSelected9 == "x"){
                alert("Player X Wins!");
                reset();
            }
            playerTurn = "o";
        }
        else{
            event.target.textContent = "O";
            squareSelected8 = "o";
            if(squareSelected2 == "o" && squareSelected5 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected7 == "o" && squareSelected9 == "o"){
                alert("Player O Wins!");
                reset();
            }
            playerTurn = "x";
        }
    }
});
square9.addEventListener("click", event =>{
    if(event.target.textContent == ""){
        if(playerTurn === "x"){
            event.target.textContent = "X";
            squareSelected9 = "x";
            if(squareSelected3 == "x" && squareSelected6 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected7 == "x" && squareSelected8 == "x"){
                alert("Player X Wins!");
                reset();
            }
            else if(squareSelected1 == "x" && squareSelected5 == "x"){
                alert("Player X Wins!");
                reset();
            }
            playerTurn = "o";
        }
        else{
            event.target.textContent = "O";
            squareSelected9 = "o";
            if(squareSelected3 == "o" && squareSelected6 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected7 == "o" && squareSelected8 == "o"){
                alert("Player O Wins!");
                reset();
            }
            else if(squareSelected1 == "o" && squareSelected5 == "o"){
                alert("Player O Wins!");
                reset();
            }
            playerTurn = "x";
        }
    }
});

function reset(){
    square1.textContent = "";
    square2.textContent = "";
    square3.textContent = "";
    square4.textContent = "";
    square5.textContent = "";
    square6.textContent = "";
    square7.textContent = "";
    square8.textContent = "";
    square9.textContent = "";
    squareSelected1 = "";
    squareSelected2 = "";
    squareSelected3 = "";
    squareSelected4 = "";
    squareSelected5 = "";
    squareSelected6 = "";
    squareSelected7 = "";
    squareSelected8 = "";
    squareSelected9 = "";
    playerTurn = "x";
}