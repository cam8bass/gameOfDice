export default class View {
  _parentElement;
  _data;

  render(data) {
    this._data = data;
    if (!data) return; // créer un message d'erreur
    const markup = this._generateMarkup(data);
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
