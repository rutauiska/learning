let tasks = [];
let currentIndex = 0;

function normalize(text) {
  return text.trim().replace(/\s+/g, ' ').replace(/["“”]/g, '"').replace(/[’‘]/g, "'");
}

function loadTasks() {
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      tasks = data.lessons;
      showTask();
    })
    .catch(err => {
      document.getElementById('taskTitle').textContent = "Error loading tasks";
      console.error(err);
    });
}

function showTask() {
  const task = tasks[currentIndex];
  document.getElementById('taskTitle').textContent = `${currentIndex + 1}. ${task.title}`;
  document.getElementById('taskQuestion').textContent = task.question;
  document.getElementById('userInput').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'result';
}

function checkAnswer() {
  const user = document.getElementById('userInput').value;
  const feedback = document.getElementById('feedback');
  const correct = tasks[currentIndex].answer;

  if (normalize(user) === normalize(correct)) {
    feedback.textContent = "Correct!";
    feedback.className = "result correct";
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

window.onload = loadTasks;