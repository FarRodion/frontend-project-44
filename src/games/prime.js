import { randomNum } from '../LogicGames.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeMethod = () => {
  const question = randomNum(2, 100);
  const answer = isPrime(question) === true ? 'yes' : 'no';
  return [description, question, answer];
};

export default isPrimeMethod;
