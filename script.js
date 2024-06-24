var rock = 1;
var paper = 2;
var scissors = 3;

function getComputerChoice() {
    const rndInt = randomIntFromInterval(1, 3);
    if (rndInt == 1) {
        console.log("PC choice is rock");
        return "rock";
    } else if (rndInt == 2) {
        console.log("PC choice is paper");
        return "paper";
    } else if (rndInt == 3) {
        console.log("PC choice is scissors");
        return "scissors";
    }
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function userChoice(choice) {
    if (choice == "rock") {
        alert("You have chosen rock");
    } else if (choice == "paper") {
        alert("You have chosen paper");
    } else if (choice == "scissors") {
        alert("You have chosen scissors");
    }
}

function game(user_choice, computer_choice) {
    if (user_choice == "rock" && computer_choice == "paper") {
        return "Computer wins! Paper covers Rock.";
    } else if (user_choice == "rock" && computer_choice == "scissors") {
        return "User wins! Rock crushes Scissors.";
    } else if (user_choice == "rock" && computer_choice == "rock") {
        return "It's a tie! Both chose Rock.";
    } else if (user_choice == "paper" && computer_choice == "rock") {
        return "User wins! Paper covers Rock.";
    } else if (user_choice == "paper" && computer_choice == "scissors") {
        return "Computer wins! Scissors cut Paper.";
    } else if (user_choice == "paper" && computer_choice == "paper") {
        return "It's a tie! Both chose Paper.";
    } else if (user_choice == "scissors" && computer_choice == "rock") {
        return "Computer wins! Rock crushes Scissors.";
    } else if (user_choice == "scissors" && computer_choice == "paper") {
        return "User wins! Scissors cut Paper.";
    } else if (user_choice == "scissors" && computer_choice == "scissors") {
        return "It's a tie! Both chose Scissors.";
    } else {
        return "Invalid choice! Please choose rock, paper, or scissors.";
    }
}

// Ejecución del juego
var user_choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
userChoice(user_choice);

var computer_choice = getComputerChoice();
alert("Computer has chosen " + computer_choice);

alert(game(user_choice, computer_choice));
