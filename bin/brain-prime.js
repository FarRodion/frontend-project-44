#!/usr/bin/env node
import someLogicGames from '../src/LogicGames.js';
import isPrimeMethod from '../src/games/prime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

someLogicGames(description, isPrimeMethod);
