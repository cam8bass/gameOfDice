export const score = {
  player1: [],
  player2: [],
  winnerName: '',
  randomDice: 0,
};

export const loadRollDice = function () {
  score.randomDice = Math.trunc(Math.random() * 6) + 1;
};
