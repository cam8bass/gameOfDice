import View from './view.js';
import diceSprite from '../../img/diceSprite.svg';

class RollDiceView extends View {
  _btnRollDice = document.querySelector('.game');

  /**
   *
   * @param {function} handler
   * @todo Read the click event on the roll dice button
   */
  addHandlerUpdateImgDice(handler) {
    this._btnRollDice.addEventListener('click', function (e) {
      const btn = e.target.closest('.game__btnRollDice');

      if (!btn) return;
      handler();
    });
  }

  /**
   *
   * @param {number} numImg
   * @todo Generate image of dice
   * @returns Dice svg
   */

  displayImgDice(numImg) {
    this._imgDice.classList.remove('hidden');
    const markup = `
    <svg class="game__imgDice">
    <use xlink:href="${diceSprite}#dice-${numImg}"></use>
    </svg> 
    `;
    this._imgDice.innerHTML = '';
    this._imgDice.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   *
   * @param {Object} data
   * @todo Displays current score and current player
   */
  displayCurrentPLayer(data) {
    const dice = data.randomDice;
    const currentScore = data.currentScore;
    const currentPlayer = data.activePlayer;

    if (dice === 1) this.toggleWindow(currentPlayer);
    else
      this._selectPlayer.querySelector(
        `.player--${currentPlayer}__currentScore-score`
      ).textContent = currentScore;
  }
}

export default new RollDiceView();
