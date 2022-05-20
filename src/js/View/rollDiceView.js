import View from './view.js';
import diceSprite from '../../img/diceSprite.svg';

class RollDiceView extends View {
  _parentElement = document.querySelector('.game__img');
  _btnRollDice = document.querySelector('.game');

  addHandlerUpdateImgDice(handler) {
    this._btnRollDice.addEventListener('click', function (e) {
      const btn = e.target.closest('.game__btnRollDice');
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup(data) {
    this._parentElement.innerHTML = '';
    return `
    <svg class="game__imgDice">
    <use xlink:href="${diceSprite}#dice-${data}"></use>
    </svg> 
    `;
  }
}

export default new RollDiceView();
