import post from './post.js';
import get from './get.js';
import addScore from './addScore.js';

const submitBtn = document.querySelector('.submit-Btn');
const removeBtn = document.querySelector('.remove-Btn');
const userName = document.querySelector('.text-input');
const userScore = document.querySelector('.score-input');
const emptyList = () => {
  const scoreItem = document.querySelectorAll('.score-item');
  scoreItem.forEach((each) => each.remove());
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const user = userName.value;
  const score = userScore.value;
  if (user && score) {
    post({ user, score });
  }
});

removeBtn.addEventListener('click', async () => {
  emptyList();
  let userScores = [];
  userScores = await get();
  if (userScores.result.length > 0) {
    userScores.result.forEach((each) => {
      addScore({
        user: each.user,
        score: each.score,
      });
    });
  }
});
