// imports
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

require('dotenv').config();
// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

// port
const port = process.env.PORT || 3000;

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
