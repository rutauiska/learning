let correctAnswer = "";

function normalize(text) {
  return text.trim().replace(/\s+/g, ' ')
                   .replace(/["“”]/g, '"')
                   .replace(/[’‘]/g, "'");
}

function loadLesson() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      document.querySelector('h2').textContent = data.lesson.title;
      document.querySelector('p').textContent = data.lesson.question;
      correctAnswer = data.lesson.answer;
    })
    .catch(err => {
      console.error('Failed to load data:', err);
    });
}

function checkAnswer() {
  const userInput = document.getElementById('userInput').value;
  const feedback = document.getElementById('feedback');
  if (normalize(userInput) === normalize(correctAnswer)) {
    feedback.innerHTML = "Correct! The answer is <code>" + correctAnswer + "</code>";
    feedback.className = "result correct";
  } else {
    feedback.innerHTML = "Incorrect. Try again!";
    feedback.className = "result incorrect";
  }
}

window.onload = loadLesson;
