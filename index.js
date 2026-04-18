const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Масиви - твоята временна база данни
let users = [
  { id: 1, name: "Доника", email: "donika@test.com", points: 0, level: 1 } // Добавяме теб като тестов потребител №1
];
let tasks = [];
let questions = [];

// Пътища (Routes)
app.get('/users', (req, res) => res.json(users));

app.post('/register', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email, points: 0, level: 1 };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.post('/tasks', (req, res) => {
  const { title, points, userId } = req.body;
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ error: "Потребител не е намерен" });

  const newTask = { id: tasks.length + 1, title, points, userId, completed: true };
  tasks.push(newTask);
  user.points += points; // Увеличаваме точките на потребителя в масива
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