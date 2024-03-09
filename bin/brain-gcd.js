#!/usr/bin/env node
import someLogicGames from '../src/LogicGames.js';
import GSDMethod from '../src/games/gcd.js';

const description = 'Find the greatest common divisor of given numbers.';

someLogicGames(description, GSDMethod);
