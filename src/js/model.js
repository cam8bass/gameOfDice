export const dataGame = {
  score: [0, 0],
  currentScore: 0,
  activePlayer: 0,
  randomDice: 0,
  winnerName: '',
  playing: true,
};

export const switchPLayer = function () {
  dataGame.activePlayer = dataGame.activePlayer === 0 ? 1 : 0;
  dataGame.currentScore = 0;
};

export const loadRollDice = function () {
  // Generates a random number
  const numberRandom = Math.trunc(Math.random() * 6) + 1;
  dataGame.randomDice = numberRandom;
  // Switch player and add current score
  if (numberRandom === 1) switchPLayer();
  else dataGame.currentScore += numberRandom;
};

export const loadHoldScore = function () {
  dataGame.score[dataGame.activePlayer] += dataGame.currentScore;

  if (dataGame.score[dataGame.activePlayer] >= 100) {
    dataGame.playing = false;
    dataGame.winnerName = `player ${dataGame.activePlayer + 1}`;
  } else switchPLayer();
};

export const loadNewGame = function () {
  switchPLayer();
  dataGame.currentScore = 0;
  dataGame.playing = true;
  dataGame.score = [0, 0];
};
