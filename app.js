// imports
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
// Middleware
app.use(express.json());

// Routes

app.use('/api/v1/tasks', tasks);

// port
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is running on ${port}.`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
