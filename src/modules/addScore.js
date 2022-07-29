export default ({ user, score }) => {
  const listWrapper = document.querySelector('.list-wrapper');
  listWrapper.innerHTML += `
      <li class="score-item">${user}: ${score}</li>
    `;
};
