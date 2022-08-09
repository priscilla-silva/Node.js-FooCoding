'use strict';

// const http = require('http');
// const fs = require('fs');
// const DEFAULT_ENCODING = 'utf8';
// let arg = process.argv[2];
// let todolist = data ? JSON.parse(data) = []

// const server = http.createServer(function (req, res) {
//   fs.readFile('todolist.txt', (err, data) => {
//     res.writeHead(200, {'Content-Type', 'application/json'});
//     res.write(data);
//     return res.end();

//     switch (arg) {
//       case 'add': {
//         todolist.push(args[1]);
//         break;
//       }
//       default: {
//         console.log('Help');
//         break;
//       }
  
// }
//   });
//   return server;
// }).listen(3000);

// const http = require('http');
// const fs = require('fs');
// const DEFAULT_ENCODING = 'utf8';
// let arg = process.argv[2];
// //let todolist = data ? JSON.parse(data) = []

// const server = http.createServer((req, res) => {
  
//   fs.readFile('todolist.txt', (err, data) => {
//     res.setHeader('Content-Type', 'application/JSON')

//     switch (arg) {
//       case 'add':
//         todolist.push(arg[1]);
//         break;
      
//       default:
//         console.log('Help');
//         break;
//     }

//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       red.end(data);
//   }
// })

// });

// server.listen(3000, 'localhost', () => {
//   console.log('Listenig on port 3000')
// });

const fs = require('fs');
const encoding = 'utf8';
const todolist = 'todolist.txt'
let args = process.argv.slice(3);
let cmd = process.argv[2];
//let task = JSON.stringify(data)

const helpScreen = () => {
  fs.readFile('help.txt', encoding, (err, data) => {
  if (err) throw err;
  console.log(data);
})
}  

const showAll = () => {
  fs.readFile(todolist, encoding, (err, data) => {
    if (err) {
      throw err;
    } else if (data.length !== 0) {
      console.log(data);
    } else {
      console.log('Hooray! No pending tasks.');
  }
})
} 

const addTask = () => {
  fs.appendFile(todolist, args.join(' ')+(' ')+('\n'), (err) => { 
    if (err) throw err;
      console.log('Task saved.')
})
}

const clearAll = () => {
  fs.truncate(todolist, 0, (err) => {
    if (err) throw err;
    console.log('All clear')
  })
}

switch (cmd) {
  case 'list':
    showAll();
    break;

  case 'add':
    addTask();
    break;
  
  case 'reset':
    clearAll();
    break;
  
  default:
    helpScreen();
    break;
}



