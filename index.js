const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('./')); // Това обслужва файловете ти (index.html, script.js)

// Път, който зарежда сайта
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Масиви - твоята временна база данни
let users = [
  { id: 1, name: "Доника", email: "donika@test.com", points: 0, level: 1 }
];
let tasks = [];

// Пътища (Routes)
app.get('/users', (req, res) => res.json(users));

app.post('/tasks', (req, res) => {
  const { title, points, userId } = req.body;
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ error: "Потребител не е намерен" });

  const newTask = { id: tasks.length + 1, title, points, userId, completed: true };
  tasks.push(newTask);
  user.points += points; 
  res.status(201).json(newTask);
});

app.get('/market-value/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ error: "Потребител не е намерен" });

  const value = user.points * 10;
  res.json({
    name: user.name,
    points: user.points,
    marketValue: `${value}$`
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Работи! Сървърът е готов на порт ${PORT}.`);
});