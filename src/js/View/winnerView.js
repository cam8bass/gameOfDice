import View from './view.js';

class WinnerView extends View {
  _message = document.querySelector('.message');
  _overlay = document.querySelector('.overlay');
  _btnClose = document.querySelector('.message__close');

  addHandlerCloseMessage() {
    this._btnClose.addEventListener('click', this._closeWindow.bind(this));
  }

  _closeWindow() {
    this._overlay.classList.toggle('hidden');
    this._message.classList.toggle('hidden');
  }

  /**
   *
   * @param {String} playerWin Winner's name
   */
  messageWin(playerWin) {
    this._closeWindow();
    this._message.querySelector(
      '.message__title'
    ).textContent = `🎆 Félicitation ${playerWin}, vous avez gagné !!! 🎆 `;
  }
}

export default new WinnerView();
