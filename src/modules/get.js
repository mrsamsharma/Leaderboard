export default async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fFZPnDNV5Sl37VJrY49b/scores/';
  return (await fetch(url)).json();
};