import View from './view.js';
import diceSprite from '../../img/diceSprite.svg';

class RollDiceView extends View {
  _parentElement = document.querySelector('.game__img');
  _btnRollDice = document.querySelector('.game');
  _selectPlayer = document.querySelector('.player');
  _player1 = document.querySelector('.player--0');
  _player2 = document.querySelector('.player--1');

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
   * @returns Html of svg
   */
  _generateMarkup(numImg) {
    this._parentElement.innerHTML = '';
    return `
    <svg class="game__imgDice">
    <use xlink:href="${diceSprite}#dice-${numImg}"></use>
    </svg> 
    `;
  }

  /**
   *
   * @param {number} currentPlayer
   * @todo Sets the current player's score to 0 and toggles the display
   */
  toggleWindow(currentPlayer) {
    this._player1.classList.toggle('activePlayer');
    this._player2.classList.toggle('activePlayer');
    this._selectPlayer.querySelector(
      `.player--${currentPlayer}__currentScore-score`
    ).textContent = 0;
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
