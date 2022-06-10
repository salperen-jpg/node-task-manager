// imports
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// Middleware
app.use(express.json());

// Routes
app.get('/hello', (req, res) => {
  res.send('TASK MANAGER APP');
});
app.use('/api/v1/tasks', tasks);

// port
const port = 3000;

app.listen(port, () => {
  console.log(`app is running on ${port}.`);
});
