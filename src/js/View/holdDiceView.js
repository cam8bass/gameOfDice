import View from './view.js';
class HoldDiceView extends View {
  _parentElement = document.querySelector('.player');
  _btnHold = document.querySelector('.game');

  addHandlerHoldDice(handler) {
    this._btnHold.addEventListener('click', function (e) {
      const btn = e.target.closest('.game__btnHold');
      if (!btn) return;
      handler();
    });
  }

  /**
   *
   * @param {number} activePlayer
   * @param {number} score
   * @todo Displays total score
   */
  displayTotalScore(activePlayer, score) {
    this._parentElement.querySelector(
      `.player--${activePlayer}__score`
    ).textContent = score;
  }

  /**
   *
   * @param {number} currentPlayer
   * @todo Switch player
   */
  displayCurrentPlayer(currentPlayer) {
    this.toggleWindow(currentPlayer);
  }
}

export default new HoldDiceView();
