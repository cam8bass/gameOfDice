import * as model from './model.js';
import rollDiceView from './View/rollDiceView.js';
import holdDiceView from './View/holdDiceView.js';
import winnerView from './View/winnerView.js';
import newGameView from './View/newGameView.js';

class Controle {
  controleRollDice() {
    if (model.dataGame.playing) {
      // Generates a random dice
      model.loadRollDice();
      // Displays image based on the generated random number
      rollDiceView.displayImgDice(model.dataGame.randomDice);
      // Show current player and current score
      rollDiceView.displayCurrentPLayer(model.dataGame);
    }
  }

  controleHoldDice() {
    // Adds the current score to the total score
    const activePlayer = model.dataGame.activePlayer;
    model.loadHoldScore();
    const score = model.dataGame.score[activePlayer];
    // Display total score and switch player
    holdDiceView.displayTotalScore(activePlayer, score);
    holdDiceView.displayCurrentPlayer(activePlayer);
    // Display message win
    if (!model.dataGame.playing)
      winnerView.messageWin(model.dataGame.winnerName);
  }

  controleNewGame() {
    // Resets all scores and window
    model.loadNewGame();
    newGameView.resetWindow();
  }
}

const app = new Controle();

const init = function () {
  holdDiceView.addHandlerHoldDice(app.controleHoldDice);
  rollDiceView.addHandlerUpdateImgDice(app.controleRollDice);
  winnerView.addHandlerCloseMessage();
  newGameView.addHandlerNewGame(app.controleNewGame);
};
init();
