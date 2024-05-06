const countStudents = require('./3-read_file_async.js')
const http = require('http');

const path = process.argv[2];
const port = 1245;
const hostname = '127.0.0.1'

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.statusCode = 200;
    countStudents(path)
      .then((data) => {
        res.end(`This is the list of our students\n${data.join('\n')}`);
      })
      .catch((error) => {
        res.end(error);
      });
  }
});

app.listen(port, () => {
  console.log(`App server listening on ${hostname}:${port}...`)
});

module.exports = app;