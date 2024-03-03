import { randomNum } from '../LogicGames.js';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = randomNum(0, operators.length - 1);
  return operators[operatorIndex];
};

const calculate = (operator, num1, num2) => {
  if (operator === '+') {
    return num1 + num2;
  } if (operator === '-') {
    return num1 - num2;
  } if (operator === '*') {
    return num1 * num2;
  }
  return 'Incorrect operation';
};

const calculationMethod = () => {
  const number1 = randomNum(0, 10);
  const number2 = randomNum(0, 10);
  const operation = randomOperator();
  const question = `${number1} ${operation} ${number2}`;
  const answer = String(calculate(operation, number1, number2));
  return [question, answer];
};

export default calculationMethod;
