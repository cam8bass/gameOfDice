import View from './view.js';
class RollDiceView extends View {
  _parentElement = document.querySelector('.game');
  _imgDice = document.querySelector('.game__imgDice');

  addHandlerUpdateImgDice(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.game__btnRollDice');
      if (!btn) return;

      handler();
    });
  }

  _generateMarkup(result) {
    console.log(result);
    return `
    <img src="src/img/dice-${result}.png" alt="Image d'un dés" class="game__imgDice" />
    `;
  }
}

export default new RollDiceView();
