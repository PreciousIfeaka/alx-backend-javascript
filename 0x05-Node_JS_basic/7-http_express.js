const process = require('process');
const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1245;
const path = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(path).then((data) => {
    res.send(`This is the List of our students\n${data}`);
  }).catch(() => {
    res.status(404).send('Cannot load database\nThis is the list of our students');
  });
});

app.listen(port, () => {

});

module.exports = app;
