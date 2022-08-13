/* eslint-disable no-unused-vars */
'use strict';

const Express = require('express');
const app = new Express();
const _ = require('lodash');
const fs = require('fs');
const {
  createTodo,
  deleteTodo,
  readTodos,
  updateTodo
} = require('./actions');
const Todo = require('./todo');

const PORT = 3000;
const FILENAME = 'todos.json';
const TODO_SLUG = 'todos';
// A SLUG is when a website URL contains the title of the page. Helps with SEO.
const todo = new Todo(FILENAME);

// Use built-in JSON middleware to automatically parse JSON
app.use(Express.json());

app.post(`/${TODO_SLUG}`, createTodo.bind(null, todo));
app.get(`/${TODO_SLUG}`, readTodos.bind(null, todo));
app.put(`/${TODO_SLUG}/:id`, updateTodo.bind(null, todo));
app.delete(`/${TODO_SLUG}/:id`, deleteTodo.bind(null, todo));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
