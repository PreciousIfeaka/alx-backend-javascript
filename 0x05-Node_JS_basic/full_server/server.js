const express = require('express');
const router = require('./routes/index');

const port = 1245;
const app = express();

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(port, () => {
  console.log('listening on port...');
});

module.exports = app;
