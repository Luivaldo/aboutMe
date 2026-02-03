'use strict';


let userName = prompt('What is your name?');
alert('Welcome to my site, ' + userName + '!');


let answer1 = prompt('Do you think I am older than 30? (yes/no)').toLowerCase();

if (answer1 === 'yes' || answer1 === 'y') {
  alert(userName + ', that is correct!');
} else {
  alert(userName + ', that is incorrect.');
}


let answer2 = prompt('Do you think I like soccer? (yes/no)').toLowerCase();

if (answer2 === 'yes' || answer2 === 'y') {
  alert(userName + ', you got it right!');
} else {
  alert(userName + ', that is not correct.');
}


let answer3 = prompt('Is my favorite color blue? (yes/no)').toLowerCase();

if (answer3 === 'no' || answer3 === 'n') {
  alert(userName + ', correct!');
} else {
  alert(userName + ', not quite.');
}


let answer4 = prompt('Do you think I am good at coding? (yes/no)').toLowerCase();

if (answer4 === 'yes' || answer4 === 'y') {
  alert(userName + ', thanks! That is correct.');
} else {
  alert(userName + ', I am getting there!');
}


let answer5 = prompt('Do you think I like building websites? (yes/no)').toLowerCase();

if (answer5 === 'yes' || answer5 === 'y') {
  alert(userName + ', correct again!');
} else {
  alert(userName + ', actually, I do!');
}


alert('Thanks for playing the guessing game, ' + userName + '!');
