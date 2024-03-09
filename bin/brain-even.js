#!/usr/bin/env node
import someLogicGames from '../src/LogicGames.js';
import isEven from '../src/games/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

someLogicGames(description, isEven);
