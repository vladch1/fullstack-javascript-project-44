#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correct = 0;

while (correct < 3) {
    const number = Math.round((Math.random() * 100));
    console.log(`Question: ${number}`);
    const userAns = readlineSync.question('Your answer: ');
    let correctAns = '';
    if (number % 2 === 0) {
        correctAns = 'yes';
    } else {
        correctAns = 'no';
    }

    if (correctAns === userAns) {
        correct += 1;
        console.log('Correct!');
    } else {
        console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
        console.log(`Let's try again, ${name}l!`);
        break;
    }
}

if (correct === 3) {
    console.log(`Congratulations, ${name}!`);
}
