'use strict'


// let secretNumber = Math.trunc(Math.random()* 100) + 1
// console.log(secretNumber)

// console.log('Welcome to the guessing game');

// const player1Name = prompt('What is your name player1?')

// console.log(`Welcome ${player1Name} to the guessing game` )

// const player1Age = prompt(`What is your age ${player1Name}`)

// const player1Occupation = prompt(`What do you do for a living ${player1Name}?`)

// const player1Country = prompt('Where do you come from?')

// const player2Name = prompt('What is your name player2?')

// console.log(`Welcome ${player2Name} to the guessing game` )

// const player2Age = prompt(`What is your age ${player2Name}?`)

// const player2Occupation = prompt(`What do you do for a living ${player2Name}?`)

// const player2Country = prompt('Where do you come from?')

// let player1guesses = 3;
// let player2guesses = 3;

// console.log(`Thank you for filling out your info ${player1Name} and ${player2Name}. Lets start!`)
// console.log(`Try and guess a number between 1 and 100, you have 4 tries. ${player1Name} starts`)



// for (player1guesses; player1guesses >= 0; player1guesses--) {
// let player1MadeGuess = parseInt(prompt(`make a guess!`))

//     if (player1MadeGuess > secretNumber) {
//         console.log('Too high 📈');
//         console.log(`You have ${player1guesses} left`)
        
        
//     } 
    
//     else if(player1MadeGuess < secretNumber) {
//         console.log('Too Low 📉')
//         console.log(`You have ${player1guesses} left`)
        
//     }


//     else if (player1MadeGuess === secretNumber) {
//         console.log('That is correct 🎉');
//         console.log(`${player1Name} has won the game`)
//         break;
//     }

    
// };

// console.log(`${player1Name} has not guessed the number`)
// console.log(`It's ${player2Name}'s turn`)


// for (player2guesses; player2guesses >= 0; player2guesses--) {
//     let player2MadeGuess = parseInt(prompt(`make a guess!`))
    
//         if (player2MadeGuess > secretNumber) {
//             console.log('Too high 📈');
//             console.log(`You have ${player2guesses} left`)
            
            
//         } 
        
//         else if(player2MadeGuess < secretNumber) {
//             console.log('Too Low 📉')
//             console.log(`You have ${player2guesses} left`)
            
//         }
        
        
//         else if (player2MadeGuess === secretNumber) {
//             console.log('That is correct 🎉');
//             console.log(`${player2Name} has won the game`)
//             break;
//         }
    
        
//     };

class GuessingGame {
    constructor() {
      this.secretNumber = Math.trunc(Math.random()* 100) + 1;
      this.player1guesses = 4;
      this.player2guesses = 4;
      this.currentPlayer = 1;
    }
  
    start() {
      console.log('Welcome to the guessing game');
      this.getPlayerInfo(1);
      this.getPlayerInfo(2);
      console.log(`Thank you for filling out your info ${this.player1Name} and ${this.player2Name}. Let's start!`);
      console.log(`Try and guess a number between 1 and 100, you have 4 tries. ${this.player1Name} starts`);
      this.play();
    }
  
    getPlayerInfo(playerNumber) {
      const name = prompt(`What is your name player${playerNumber}?`);
      const age = prompt(`What is your age ${name}?`);
      const occupation = prompt(`What do you do for a living ${name}?`);
      const country = prompt(`Where do you come from ${name}?`);
      if (playerNumber === 1) {
        this.player1Name = name;
        this.player1Age = age;
        this.player1Occupation = occupation;
        this.player1Country = country;
      } else {
        this.player2Name = name;
        this.player2Age = age;
        this.player2Occupation = occupation;
        this.player2Country = country;
      }
      console.log(`Welcome ${name} to the guessing game`);
    }
  
    play() {
      for (this.currentPlayer = 1; this.currentPlayer <= 2; this.currentPlayer++) {
        const currentPlayerName = this.currentPlayer === 1 ? this.player1Name : this.player2Name;
        console.log(`${currentPlayerName}, it's your turn to guess!`);
        for (let guesses = 3; guesses >= 0; guesses--) {
          const madeGuess = parseInt(prompt(`Make a guess! You have ${guesses} tries left.`));
          if (madeGuess > this.secretNumber) {
            console.log('Too high 📈');
          } else if (madeGuess < this.secretNumber) {
            console.log('Too low 📉');
          } else {
            console.log('That is correct 🎉');
            console.log(`${currentPlayerName} has won the game!`);
            return;
          }
        }
        console.log(`${currentPlayerName} has used all their guesses!`);
      }
      console.log(`Both players have used all their guesses. The secret number was ${this.secretNumber}.`);
    }
  }
  
  const game = new GuessingGame();
  game.start();