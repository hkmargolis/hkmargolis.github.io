let questions = [];
let score = 0;
let high_score = 0;

localStorage.setItem('score', score.toString());
localStorage.setItem('high_score', high_score.toString());

fetch (
  'https://opentdb.com/api.php?amount=10&category=10'
)
  .then((res) => {
    return res.json();
  })

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const guess = document.getElementById('quiz-form').selectedOptions;

  localStorage.setItem('guess', guess);

});
