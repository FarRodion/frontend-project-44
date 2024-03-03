#!/usr/bin/games/env node
import { randomNum } from '../LogicGames.js';

const isEvenTru = (number) => number % 2 === 0;

const isEven = () => {
  let answer = '';
  let questionNum = 0;
  questionNum = randomNum(1, 100);
  answer = isEvenTru(questionNum) ? 'yes' : 'no';

  return [questionNum, answer];
};

export default isEven;
