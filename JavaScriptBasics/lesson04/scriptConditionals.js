var player1 = 0;
var player2 = 0;
var scoreboard;

// If ... else if ... else conditional statment
console.log("If ... else if ... else conditional statment");
console.log(`Scoreboard => Player1: ${ player1 } - Palyer2: ${ player2 }`);
var conditional = function () {
    if (player1 > 0) {
        console.log("Player 1 has scored!");        
    } else if (player1 > 0) {
        console.log("Player 2 has scored!");        
    } else {
        console.log("Nobody has scored!");        
    }    
}

console.log(conditional);
conditional();

// Nested conditional statment
console.log("Nested conditional statment");
player1 = 3;
player2 = 2;
var timeInMinutes = 46;
console.log(`Scoreboard => Player1: ${ player1 } - Palyer2: ${ player2 }`);
conditional = function () {
    if (timeInMinutes >= 45) {
        console.log(`Time is over! Final score => Player1: ${ player1 } - Palyer2: ${ player2 }`);        
    } else {
        console.log(`It last ${ 45 - timeInMinutes}`);
        if (player1 > 0) {
            console.log("Player 1 has scored!");        
        } else if (player1 > 0) {
            console.log("Player 2 has scored!");        
        } else {
            console.log("Nobody has scored!");        
        }            
    }
}

console.log(conditional);
conditional();

// Ternary coditional operator
console.log("Ternary coditional operator");
conditional = function () {
    console.log(
        player1 > player2 ? "Player 1 won!" : player2 > player1 ? "Player 2 won!" : "The game tied!"
    );
};

console.log(conditional);
conditional();

// Switch case stament
console.log("Switch case stament");
console.log(`Scoreboard => Player1: ${ player1 } - Palyer2: ${ player2 }`);
placar = player1 > player2 ? player1 > player2 :
 player1 < player2  ? player1 < player2 : player1 == player2;

conditional = function() {
    switch (placar) {
        case player1 > player2:
            console.log("Player 1 won!");            
            break;
        case player1 < player2:
            console.log("Player 2 won!");    
            break;
        default:
            console.log("The game tied!");
            break;
    }
}

console.log(conditional);
conditional();
