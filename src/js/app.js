console.log('app worked');
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

const game = new Game();
game.start();

// заглушки для проверки: покажем, что мы действительно импортировали
console.log(GameSavingData);
console.log(loadGame);
console.log(saveGame);