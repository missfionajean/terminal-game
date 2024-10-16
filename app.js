
//set up prompt variable to be used throughout
const prompt = require('prompt-sync')();

//get player's name and welcome them
const username = prompt('What is your name? ');
console.log(`Welcome, ${username}!`);

//comical ready prompt (infinite loop)
while (true) {
    const imReady = prompt('Are you ready? \(Y/N\) ');
    if (imReady == 'y') {
        console.log(`That\'s the spirit, ${username}! Let's go!`);
        break;
    } else if (imReady =='n') {
        console.log(`Too bad, ${username}... Here we go!`);
        break;
    } else {
        console.log('You have to answer Y or N. I don\'t make the rules, I just enforce them.');
    }
};