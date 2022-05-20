import * as model from './model.js';
import rollDiceView from './View/rollDiceView.js';

const controleRollDice = function () {
  // Generates a random dice
  model.loadRollDice();
  const randomDice = model.score.randomDice;
  // Displays image based on the generated random number
  rollDiceView.render(randomDice);
};

controleRollDice();

const init = function () {
  rollDiceView.addHandlerUpdateImgDice(controleRollDice);
};
init();
