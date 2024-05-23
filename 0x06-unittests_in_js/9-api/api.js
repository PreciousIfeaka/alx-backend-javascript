const express = require('express');
const PORT = 7865;

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\[0-9]*)', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.params.id}`);
})

app.listen(PORT, () => {
  console.log('starting server...');
})
