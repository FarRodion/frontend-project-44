#!/usr/bin/env node
import readlineSync from 'readline-sync';

const stepNum = 3;

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
const isEvenTru = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = () => {
  let answer = '';
  let questionNum = 0;
  let userAnswer = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < stepNum; i += 1) {
    questionNum = randomNum(1, 100);
    answer = isEvenTru(questionNum) ? 'yes' : 'no';
    console.log(`Question: ${questionNum}`);
    userAnswer = readlineSync.question('Your ansver: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

isEven();
