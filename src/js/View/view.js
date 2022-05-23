export default class View {
  _parentElement;
  _player1 = document.querySelector('.player--0');
  _namePlayer1 = document.querySelector('.player--0__heading');
  _namePlayer2 = document.querySelector('.player--1__heading');
  _player2 = document.querySelector('.player--1');
  _selectPlayer = document.querySelector('.player');
  _playerAll = document.querySelectorAll('.playerAll__currentScore-score');

  /**
   *
   * @param {Number} currentPlayer
   * @todo Sets the current player's score to 0 and toggles the display
   */
  toggleWindow(currentPlayer) {
    this._player1.classList.toggle('activePlayer');
    this._player2.classList.toggle('activePlayer');
    this._namePlayer1.classList.toggle('active');
    this._namePlayer2.classList.toggle('active');
    this._playerAll.forEach(player => (player.textContent = 0));
  }
}
