
let tasks = lessonData.lessons;
let currentIndex = 0;
let score = 0;
let answered = new Array(tasks.length).fill(false);

function normalize(text) {
  return text.trim().replace(/\s+/g, ' ').replace(/["“”]/g, '"').replace(/[’‘]/g, "'");
}

function showTask() {
  const task = tasks[currentIndex];

  document.getElementById('taskTitle').textContent = `${currentIndex + 1}. ${task.title}`;
  document.getElementById('taskQuestion').textContent = task.question;
  document.getElementById('userInput').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'result';

  document.getElementById('theorySummary').textContent = task.theory || "No theory available.";
  document.getElementById('theoryMore').textContent = task.theory_more || "";
  document.getElementById('theoryMore').style.display = 'none';
  document.getElementById('toggleTheory').style.display = task.theory_more ? 'inline' : 'none';
  document.getElementById('toggleTheory').textContent = 'Show more';

  updateStatusBar();
  updateProgressBar();
}

function toggleTheory() {
  const more = document.getElementById('theoryMore');
  const toggleBtn = document.getElementById('toggleTheory');
  if (more.style.display === 'none') {
    more.style.display = 'block';
    toggleBtn.textContent = 'Show less';
  } else {
    more.style.display = 'none';
    toggleBtn.textContent = 'Show more';
  }
}

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById('score');
  scoreDisplay.textContent = `Points: ${score}`;
  scoreDisplay.classList.add('score-animate');
  setTimeout(() => {
    scoreDisplay.classList.remove('score-animate');
  }, 500);
}

function updateStatusBar() {
  const answeredCount = answered.filter(x => x).length;
  const total = tasks.length;
  const statusDisplay = document.getElementById('status');
  statusDisplay.textContent = `Answered: ${answeredCount} / ${total} — Remaining: ${total - answeredCount}`;
}

function updateProgressBar() {
  const answeredCount = answered.filter(x => x).length;
  const total = tasks.length;
  const percentage = Math.round((answeredCount / total) * 100);
  const bar = document.getElementById('progressFill');
  bar.style.width = percentage + '%';
}

function checkAnswer() {
  const userInput = document.getElementById('userInput').value;
  const correct = tasks[currentIndex].answer;
  const feedback = document.getElementById('feedback');

  if (normalize(userInput) === normalize(correct)) {
    if (!answered[currentIndex]) {
      score++;
      answered[currentIndex] = true;
      updateScoreDisplay();
    }
    feedback.textContent = "Correct!";
    feedback.className = "result correct";
  } else {
    feedback.textContent = "Incorrect. Try again!";
    feedback.className = "result incorrect";
  }

  updateStatusBar();
  updateProgressBar();
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
  updateProgressBar();
};
