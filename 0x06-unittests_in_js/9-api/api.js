const express = require('express');
const PORT = 7865;

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {

})

app.listen(PORT, () => {
  console.log('starting server...');
})