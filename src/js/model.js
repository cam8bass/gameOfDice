export const dataGame = {
  score: [0, 0],
  currentScore: 0,
  activePlayer: 0,
  randomDice: 0,
  winnerName: '',
};

const switchPLayer = function () {
  dataGame.currentScore = -1;
  dataGame.activePlayer = dataGame.activePlayer === 0 ? 1 : 0;
};

export const loadRollDice = function () {
  // Generates a random number
  const numberRandom = Math.trunc(Math.random() * 6) + 1;
  dataGame.randomDice = numberRandom;
  // Switch player and add current score
  if (numberRandom === 1) switchPLayer();
  dataGame.currentScore += numberRandom;
};
