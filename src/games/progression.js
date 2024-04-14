import { randomNum } from '../LogicGames.js';

const progressionLen = 10;
const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const step = randomNum(0, 10);
  const arrProgresiion = [];
  const firstNum = randomNum(0, 100);
  for (let i = 0; i < progressionLen; i += 1) {
    arrProgresiion.push(firstNum + i * step);
  }
  const hidenIndex = randomNum(0, progressionLen - 1);
  const answer = String(arrProgresiion[hidenIndex]);
  arrProgresiion[hidenIndex] = '..';
  const question = arrProgresiion.join(' ');
  return [description, question, answer];
};

export default generateProgression;
