import View from './view.js';
class NewGameView extends View {
  _btnNewGame = document.querySelector('.game__btnNewGame');
  _allTotalScore = document.querySelectorAll('.playerAll__score');

  resetWindow() {
    this._allCurrentScore.forEach(score => (score.textContent = 0));
    this._allTotalScore.forEach(total => (total.textContent = 0));
    this._imgDice.classList.add('hidden');
  }

  addHandlerNewGame(handler) {
    this._btnNewGame.addEventListener('click', function (e) {
      const btn = e.target.closest('.game__btnNewGame');
      if (!btn) return;
      handler();
    });
  }
}

export default new NewGameView();
