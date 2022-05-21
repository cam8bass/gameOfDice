import * as model from './model.js';
import rollDiceView from './View/rollDiceView.js';

const controleRollDice = function () {
  // Generates a random dice
  model.loadRollDice();
  const randomDice = model.dataGame.randomDice;
  // Displays image based on the generated random number
  rollDiceView.render(randomDice);
  // Show current player and current score
  rollDiceView.displayCurrentPLayer(model.dataGame);
};

const init = function () {
  rollDiceView.addHandlerUpdateImgDice(controleRollDice);
};
init();
