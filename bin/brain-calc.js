#!/usr/bin/env node
import someLogicGames from '../src/LogicGames.js';
import calculationMethod from '../src/games/calc.js';

const description = 'What is the result of the expression?';
someLogicGames(description, calculationMethod);
