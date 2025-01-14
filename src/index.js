import playGame from './controllers/game-controller.js';

document.getElementById('start-button').addEventListener('click', () => {
  playGame();
});
