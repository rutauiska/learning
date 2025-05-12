et tasks = lessonData.lessons;
let currentIndex = 0;
let score = 0;

function normalize(text) {
  return text.trim().replace(/\\s+/g, ' ').replace(/["“”]/g, '"').replace(/[’‘]/g, "'");
}

function showTask() {
  const task = tasks[currentIndex];
  document.getElementById('taskTitle').textContent = `${currentIndex + 1}. ${task.title}`;
  document.getElementById('taskQuestion').textContent = task.question;
  document.getElementById('userInput').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'result';
}

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById('score');
  scoreDisplay.textContent = `Points: ${score}`;
  scoreDisplay.classList.add('score-animate');
  setTimeout(() => {
    scoreDisplay.classList.remove('score-animate');
  }, 500);
}

function checkAnswer() {
  const user = document.getElementById('userInput').value;
  const feedback = document.getElementById('feedback');
  const correct = tasks[currentIndex].answer;

  if (normalize(user) === normalize(correct)) {
    feedback.textContent = "Correct!";
    feedback.className = "result correct";
    score++;
    updateScoreDisplay();
  } else {
    feedback.textContent = "Incorrect. Try again!";
    feedback.className = "result incorrect";
  }
}

function nextTask() {
  if (currentIndex < tasks.length - 1) {
    currentIndex++;
    showTask();
  }
}

function prevTask() {
  if (currentIndex > 0) {
    currentIndex--;
    showTask();
  }
}

window.onload = () => {
  showTask();
  updateScoreDisplay();
};
