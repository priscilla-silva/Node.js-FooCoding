/* eslint-disable no-unused-vars */
'use strict';

const express = require('express');
const app = express();
const _ = require('lodash');
const fs = require('fs');
const {
  createTodo,
  deleteTodo,
  readTodos,
  updateTodos
} = require('./actions');
const Todo = require('./todo');

const PORT = 3000;
const FILENAME = 'todos.json';
const TODO_SLUG = 'todos';
// A SLUG is when a website URL contains the title of the page. Helps with SEO.
const todo = new Todo(FILENAME);

// Use built-in JSON middleware to automatically parse JSON
app.use(express.json());

// app.get('/', (req, res) => {
//   // res.send('Hello Friends!');
//   let num = _.random(0, 1000);
//   // console.log(num);
//   res.send(`${num}`);
// });

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
