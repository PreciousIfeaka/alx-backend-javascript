const http = require('http');

const PORT = 1245;
const hostname = '127.0.0.1';

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

app.listen(PORT, hostname, () => {
  console.log(`App server running at http://${hostname}:${PORT}/`)
})

module.exports = app;