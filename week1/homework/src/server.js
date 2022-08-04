
'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');
    switch (request.url) {
      case '/state':
        response.end(JSON.stringify({ state: state}));
        break;
      case '/add':
        response.end(JSON.stringify({ state: state += 1 }));
        break;
      case '/subtract':
        response.end(JSON.stringify({ state: state -= 1 }));
        break;
      case '/reset':
        response.end(JSON.stringify({ state: state = 10 }));
        break;
      default:
        const error = 'Not found';
        response.statusCode = 404;
        response.end(JSON.stringify({ error }));
        break;
    }
  });

  return server;
}

module.exports = {
  createServer
};
