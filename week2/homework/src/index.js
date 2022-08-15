'use strict';

const fs = require('fs');
const encoding = 'utf8';
const todolist = 'todolist.json';
let args = process.argv.slice(3);
let cmd = process.argv[2];
let task = args.join(' ');

const helpScreen = () => {
  fs.readFile('help.txt', encoding, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};

const showAll = () => {
  fs.readFile(todolist, encoding, (err, data) => {
    if (err) {
      throw err;
    }
    else if (data.length !== 0) {
      console.log(data);
    }
    else {
      console.log('Hooray! No pending tasks.');
    }
  });
};

const addTask = () => {
  fs.appendFile(todolist, JSON.stringify(task), (err, data) => {
    if (err) throw err;
    console.log('Saved task.');
  });
};

const removeTask = () => {
  fs.readFile(todolist, encoding, (err, data) => {
    if (err) throw err;
    console.log(data.length);
    console.log('removed');
  });
};

const clearAll = () => {
  fs.truncate(todolist, 0, (err) => {
    if (err) throw err;
    console.log('All clear');
  });
};

switch (cmd) {
  case 'list':
    showAll();
    break;

  case 'add':
    addTask();
    break;

  case 'remove':
    removeTask();
    break;

  case 'reset':
    clearAll();
    break;

  default:
    helpScreen();
    break;
}
