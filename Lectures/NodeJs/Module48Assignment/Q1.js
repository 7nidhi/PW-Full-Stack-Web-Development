/*Write a Node.js program that creates a simple HTTP server. When a client sends a 
request to the server, the server should respond with a "Hello, Students!" message# . */


const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Students!');
});

const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
