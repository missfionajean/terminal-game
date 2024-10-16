
//set up prompt variable to be used throughout
const prompt = require('prompt-sync')();

//function to establish player's name
function getUsername() {
    let nonAnswers = 0;
    while (nonAnswers < 3) {
        const name = prompt('What is your name? ');
        if (name.length == 0) {
            console.log('I have to call you SOMETHING. Let\'s try that again.');
            nonAnswers++;
        } else {
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
    }
    console.log('Whatever, I\'m calling you Kevin.');
    return 'Kevin';
}

const username = getUsername();
console.log(`Welcome to GAME NAME, ${username}!`);

//comical ready prompt loop
let nonAnswers = 0;
while (nonAnswers < 3) {
    const imReady = prompt('Are you ready? \(Y/N\) ');
    if (imReady == 'y') {
        console.log(`That\'s the spirit, ${username}! Let's go!`);
        break;
    } else if (imReady =='n') {
        console.log(`Too bad, ${username}... Here we go!`);
        break;
    } else {
        console.log('You have to answer Y or N. I don\'t make the rules, I just enforce them.');
        nonAnswers++;
    }
};

if (nonAnswers == 3) {
    console.log(`You don't follow rules very well, ${username}. Here we go anyway!`);
}