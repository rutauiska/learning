const lessonData = {
  lessons: [
    {
      title: "Tetst",
      question: "Write 1",
      answer: "1",
      theory: "Use console.log() to print messages in JavaScript.",
      theory_more: "console.log() is used for debugging and displaying values. It outputs to the browser\u2019s console."
    },
    {
      title: "Console Output",
      question: "Write a command that prints 'Hello, World!' to the console.",
      answer: "console.log('Hello, World!');",
      theory: "Use console.log() to print messages in JavaScript.",
      theory_more: "console.log() is used for debugging and displaying values. It outputs to the browser\u2019s console."
    },
    {
      title: "Variables and Data Types",
      question: "Create three variables: a number, a string, and a boolean.",
      answer: "let num = 10;\nlet text = 'Hi';\nlet isTrue = true;",
      theory: "Variables store values using let, const, or var.",
      theory_more: "JavaScript is dynamically typed. Use const for constants and let for variables."
    },
    {
      title: "Operators",
      question: "Calculate the sum and difference of two numbers and check if one is greater than the other.",
      answer: "let a = 5, b = 3;\nlet sum = a + b;\nlet diff = a - b;\nlet isGreater = a > b;",
      theory: "Operators perform arithmetic and comparisons.",
      theory_more: "Common operators: +, -, *, /, ==, ===, >, <. They form expressions in logic."
    },
    {
      title: "If Statements",
      question: "Write a function that checks whether a number is positive, negative, or zero.",
      answer: "function checkNumber(x) {\n  if (x > 0) return 'Positive';\n  else if (x < 0) return 'Negative';\n  else return 'Zero';\n}",
      theory: "if/else helps control program flow based on conditions.",
      theory_more: "Use if for checking a condition, else if for alternatives, and else for fallback."
    },
    {
      title: "Loops",
      question: "Print numbers from 1 to 10 using a for loop.",
      answer: "for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}",
      theory: "Loops repeat code blocks multiple times.",
      theory_more: "for, while, and do...while are used for iterations. Be careful with infinite loops."
    },
    {
      title: "Functions",
      question: "Write a function that adds two numbers and returns the result.",
      answer: "function add(a, b) {\n  return a + b;\n}",
      theory: "Functions are reusable code blocks.",
      theory_more: "They help avoid repetition. Can accept parameters and return results."
    },
    {
      title: "Arrow Functions",
      question: "Create an arrow function that multiplies a number by 2.",
      answer: "const double = x => x * 2;",
      theory: "Arrow functions are compact ways to define functions.",
      theory_more: "They use => syntax and don't bind their own this context."
    },
    {
      title: "Arrays",
      question: "Create an array with five fruits and add another one to the list.",
      answer: "let fruits = ['apple', 'banana', 'kiwi', 'orange', 'grape'];\nfruits.push('pear');",
      theory: "Arrays hold ordered values.",
      theory_more: "Use .push(), .pop(), and indexes to manipulate arrays."
    },
    {
      title: "Array Iteration",
      question: "Print each element of an array using forEach.",
      answer: "let nums = [1, 2, 3];\nnums.forEach(num => console.log(num));",
      theory: "forEach executes a function for each array element.",
      theory_more: "Useful for displaying or processing each item in a list."
    },
    {
      title: "Array Methods",
      question: "Filter an array to keep only numbers greater than 10.",
      answer: "let numbers = [5, 12, 8, 20];\nlet large = numbers.filter(x => x > 10);",
      theory: "Array methods process data in clean ways.",
      theory_more: ".filter() returns a subset, .map() transforms values, .reduce() accumulates them."
    },
    {
      title: "Objects",
      question: "Create an object 'person' with name, age, and a method that returns a greeting.",
      answer: "let person = {\n  name: 'Anna',\n  age: 25,\n  greet: function() {\n    return 'Hello, ' + this.name;\n  }\n};",
      theory: "Objects are collections of key-value pairs.",
      theory_more: "They can store data and behavior using properties and methods."
    },
    {
      title: "JSON",
      question: "Convert an object to JSON and back to an object.",
      answer: "let obj = { name: 'John', age: 30 };\nlet json = JSON.stringify(obj);\nlet back = JSON.parse(json);",
      theory: "JSON is a data format based on object syntax.",
      theory_more: "Use JSON.stringify() to convert to string and JSON.parse() to get object back."
    },
    {
      title: "DOM Selection",
      question: "Select an HTML element by id and change its text content.",
      answer: "document.getElementById('text').textContent = 'Hello!';",
      theory: "The DOM represents the HTML structure as objects.",
      theory_more: "Use document.getElementById() and similar methods to access elements."
    },
    {
      title: "Event Listeners",
      question: "Create a button that shows an alert when clicked.",
      answer: "document.getElementById('btn').addEventListener('click', () => {\n  alert('Button clicked!');\n});",
      theory: "Events let you respond to user actions.",
      theory_more: "Use addEventListener() to define what should happen on events like clicks."
    },
    {
      title: "DOM Manipulation",
      question: "Add a new list item to an existing HTML list.",
      answer: "let list = document.getElementById('list');\nlet item = document.createElement('li');\nitem.textContent = 'New Item';\nlist.appendChild(item);",
      theory: "DOM manipulation lets you change content dynamically.",
      theory_more: "Create, remove or update elements using JavaScript."
    },
    {
      title: "Form Validation",
      question: "Create a form that checks if an input is not empty on submit.",
      answer: "document.getElementById('form').addEventListener('submit', (e) => {\n  e.preventDefault();\n  let input = document.getElementById('name').value;\n  if (input === '') alert('Field is empty!');\n});",
      theory: "Forms collect user input and must be validated.",
      theory_more: "Validation checks like 'not empty' ensure proper data entry."
    },
    {
      title: "Timers",
      question: "Show an alert after 2 seconds using setTimeout.",
      answer: "setTimeout(() => {\n  alert('After 2 seconds!');\n}, 2000);",
      theory: "setTimeout delays a function call.",
      theory_more: "It's used for animations, messages, or any delayed execution."
    },
    {
      title: "Fetch API",
      question: "Use fetch to get data from a public API and log it.",
      answer: "fetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));",
      theory: "fetch() gets data from an external source.",
      theory_more: "Use .then() to process the response, often from APIs."
    },
    {
      title: "Async/Await",
      question: "Rewrite a fetch call using async/await.",
      answer: "async function getData() {\n  let res = await fetch('https://api.example.com/data');\n  let data = await res.json();\n  console.log(data);\n}",
      theory: "async/await simplifies working with promises.",
      theory_more: "await pauses code until promise resolves. Must be inside async function."
    },
    {
      title: "To-Do App",
      question: "Create a to-do app where you can add, mark, and delete tasks.",
      answer: "let todos = [];\nfunction addTask() {\n  let task = document.getElementById('input').value;\n  todos.push(task);\n  render();\n}\nfunction render() {\n  document.getElementById('list').innerHTML = todos.map((t, i) => `<li>${t} <button onclick='del(${i})'>Delete</button></li>`).join('');\n}\nfunction del(i) {\n  todos.splice(i, 1);\n  render();\n}",
      theory: "To-Do apps use arrays and DOM updates.",
      theory_more: "Each task is stored, shown, and can be interacted with using buttons and functions."
    }
  ]
};
