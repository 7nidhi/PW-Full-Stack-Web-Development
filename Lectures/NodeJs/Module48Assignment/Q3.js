/* Write a Node.js program that creates an HTTP server and handles different routes. 
The server should respond with "Hello, World!" for the root route ("/") and "Page Not Found" 
for any other route. */

const http = require('http');
const server = http.createServer((req, res) => {
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello, World!');
  } else {
    res.end('Page Not Found');
  }
});

const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
