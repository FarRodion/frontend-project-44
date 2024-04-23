import { randomNum } from '../LogicGames.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGCD = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
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
  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));
  return [description, question, answer];
};

export default GSDMethod;
