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


const addTask = () => {
  fs.writeFile('todolist.txt', args.join(`\n \n`), (err, todolist) => { //find out how new line works
    if (err) throw err;
    console.log('saved')
})
}

switch (cmd) {
  case 'add':
    addTask();
    break;
  
  default:
    helpScreen();
    break;
}



