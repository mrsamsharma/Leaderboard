import addScore from './addScore.js';

export default async ({ user, score }) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fFZPnDNV5Sl37VJrY49b/scores/';
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  }).then(() => {
    addScore({
      user,
      score,
    });
  });
};