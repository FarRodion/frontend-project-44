import { randomNum } from '../LogicGames.js';

const getGCD = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }

  return (num1 + num2);
};

const GSDMethod = () => {
  const number1 = randomNum(0, 100);
  const number2 = randomNum(0, 100);
  const question = `${number1}  ${number2}`;
  const answer = String(getGCD(number1, number2));
  return [question, answer];
};

export default GSDMethod;
