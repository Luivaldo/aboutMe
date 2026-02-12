'use strict';

let correctAnswers = 0;


let userName = prompt("What is your name?");
alert("Welcome to MiniResell, " + userName + "!");


let questions = [
  "Do I enjoy coding?",
  "Have I worked in a warehouse for 10 years?",
  "Do I like pizza?",
  "Am I self-employed?",
  "Am I currently learning web development?"
];

let answers = ["yes", "yes", "yes", "yes", "yes"];

for (let i = 0; i < questions.length; i++) {
  let response = prompt(questions[i] + " (yes/no)").toLowerCase();
  if (response === answers[i] || (response === "y" && answers[i] === "yes") || (response === "n" && answers[i] === "no")) {
    alert("Correct!");
    correctAnswers++;
  } else {
    alert("Oops, that's not right.");
  }
}


let correctNumber = 7; 
let attempts = 4;
let guessedCorrectly = false;

for (let i = 0; i < attempts; i++) {
  let guess = parseInt(prompt("Guess my favorite number between 1 and 10:"));
  if (guess === correctNumber) {
    alert("You got it!");
    correctAnswers++;
    guessedCorrectly = true;
    break;
  } else if (guess < correctNumber) {
    alert("Too low!");
  } else {
    alert("Too high!");
  }
}

if (!guessedCorrectly) {
  alert("The correct number was " + correctNumber);
}


let favoriteGames = [
  "call of duty: modern warfare",
  "call of duty: black ops",
  "call of duty: warzone",
  "call of duty: vanguard",
  "call of duty: wwii",
  "fortnite",
  "call of duty: cold war",
  "call of duty: ghosts",
  "call of duty: advanced warfare",
  "call of duty: infinite warfare"
];

let gameGuessed = false;

for (let i = 0; i < 6; i++) {
  let gameGuess = prompt("Guess one of my favorite video games:").toLowerCase();
  if (favoriteGames.includes(gameGuess)) {
    alert("Correct! My favorite games include: " + favoriteGames.join(", "));
    correctAnswers++;
    gameGuessed = true;
    break;
  } else {
    alert("Nope, try again!");
  }
}

if (!gameGuessed) {
  alert("My favorite games are: " + favoriteGames.join(", "));
}


alert(userName + ", you got " + correctAnswers + " out of 7 questions correct!");
