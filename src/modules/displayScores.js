import userScores from './scores.js';

const displayScores = () => {
  const listWrapper = document.querySelector('.list-wrapper');
  userScores.forEach((each) => {
    listWrapper.innerHTML += `
      <li class="score-item">${each.name}: ${each.score}</li>
    `;
  });
};

export default displayScores;