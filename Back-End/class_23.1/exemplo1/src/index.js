const express = require('express');
const customerController = require('./controllers/customerController');
const { getAll, getById, create, update, deleteById } = require('./models/customer');
const app = express();
const port = 3001;

// Faz a conversão dos dados para JSON identico ao body-parser
app.use(express.json());

app.get('/customers', customerController.getAll);

app.get('/customers/:id', customerController.getById);

app.post('/customers', customerController.create);

app.put('/customers/:id', customerController.update)

app.delete('/customers/:id', customerController.destroy)

app.listen(port, () => console.log(`Running..... ${port}`));

