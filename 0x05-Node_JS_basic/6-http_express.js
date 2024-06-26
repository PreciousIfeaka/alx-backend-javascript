const express = require('express');

const app = express();
const port = 1245;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Express app server listening on ${hostname}:${port}...`);
});

module.exports = app;
