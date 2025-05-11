const lessons = [
  {
    title: "Kas ir JavaScript un kā tas darbojas pārlūkā?",
    task: "Uzraksti 'Hello, World!' ziņojumu, izmantojot console.log().",
    answer: "console.log('Hello, World!');"
  },
  {
    title: "Mainīgie un datu tipi",
    task: "Izveido trīs mainīgos: skaitli, tekstu un boolean vērtību.",
    answer: "let skaitlis = 10;\nlet teksts = 'Sveiki';\nlet patiesiba = true;"
  },
  {
    title: "Operatori un izteiksmes",
    task: "Aprēķini summu, starpību un pārbaudi, vai skaitlis ir lielāks par citu.",
    answer: "let a = 5, b = 3;\nlet summa = a + b;\nlet starpiba = a - b;\nlet irLielaks = a > b;"
  },
  // ... pievieno pārējās nodarbības
];

// Populate dropdown
const lessonSelect = document.getElementById('lesson');
lessons.forEach((lesson, index) => {
  const opt = document.createElement('option');
  opt.value = index;
  opt.textContent = lesson.title;
  lessonSelect.appendChild(opt);
});

lessonSelect.addEventListener('change', () => {
  const selected = lessons[lessonSelect.value];
  document.getElementById('task').textContent = selected.task;
  document.getElementById('answerText').textContent = selected.answer;
  document.getElementById('answer').style.display = 'none';
});

function showAnswer() {
  document.getElementById('answer').style.display = 'block';
}

// Load first lesson
lessonSelect.value = 0;
lessonSelect.dispatchEvent(new Event('change'));
