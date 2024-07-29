require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const path = require('path');
const mongoSanitize = require('express-mongo-sanitize');

const todo = require('./routes/todo');

const connectDB = require('./database/connect');

const root = path.join(__dirname, 'client', 'dist');

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(
  mongoSanitize({
    replaceWith: '_',
  })
);

app.use(express.static(root));

app.use('/api/todo', todo);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// not found
app.use((req, res) => {
  res.status(404).json({ msg: 'Error: 404, route does not exist' });
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ msg: 'Something went wrong' });
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to database');
    app.listen(port, console.log(`Server is listening at port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
