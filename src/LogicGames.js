#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
const stepNum = 3;

const someLogicGames = (description, gameMethod) => {
  let userAnswer = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < stepNum; i += 1) {
    const [question, answer] = gameMethod();
    console.log(`Question: ${question}`);
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

export default someLogicGames;
