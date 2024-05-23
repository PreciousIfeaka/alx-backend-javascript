const express = require('express');
const bodyParser = require('body-parser');
const PORT = 7865;

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.params.id}`);
})

app.get('/available_payments', (req, res) => {
  res.status(200).send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  })
})

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`)
})

app.listen(PORT, () => {
  console.log('starting server...');
})
