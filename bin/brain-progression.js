#!/usr/bin/env node
import someLogicGames from '../src/LogicGames.js';
import generateProgression from '../src/games/progression.js';

const description = 'What number is missing in the progression?';

someLogicGames(description, generateProgression);
